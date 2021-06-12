

var express = require("express")
var app = express()
const PORT = process.env.PORT || 8080;
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
})
const mongoose = require('mongoose');

const path = require('path')
const bodyParser = require("body-parser");
const Reversi = require("./Reversi");


let reversi = new Reversi()

//static files routing
app.use(express.static(path.join(__dirname, "..", "dist")))


//mongodb connection
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

mongoose.connect('mongodb+srv://admin:zaq1@WSX@cluster0.bimak.mongodb.net/reversi?retryWrites=true&w=majority', connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


let roomSchema = new mongoose.Schema({
    user1: String,
    user2: String,
    color1: String,
    color2: String,
    gameArray: Array,
    turn: String,

})

let Room = mongoose.model("Room", roomSchema)

////////////////////////////////////////////////////

let emptyArray = []

for (let i = 0; i < 8; i++) {
    emptyArray.push([])

    for (let j = 0; j < 8; j++) {
        emptyArray[i].push([])
    }
}

//socket connection
let waitingUser = undefined;

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    if (waitingUser != undefined) {

        let user = socket.id
        let roomData = {
            user1: waitingUser,
            user2: user,
            color1: "black",
            color2: "white",
            gameArray: reversi.basicTable,
            turn: "black",
        }
        let room = new Room(roomData)

        room.save(function (err) {
            if (err) return console.error(err);
            else console.log("saved!")
        })

        // socket.broadcast.emit('startGame', roomData)
        console.log("user:", user, " waitingUser:", waitingUser)

        io.to(waitingUser).emit('startGame', roomData, roomData.color1);
        io.to(user).emit('startGame', roomData, roomData.color2);

        // io.to(waitingUser).emit("")

        waitingUser = undefined
    } else {
        waitingUser = socket.id
    }
    console.log(waitingUser)


    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});




server.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})