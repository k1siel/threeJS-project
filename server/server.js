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
            color1: "w",
            color2: "b",
            gameArray: reversi.basicTable,
            turn: "w",
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

        let moveArr = reversi.checkPlaces("w", reversi.basicTable)
        io.to(waitingUser).emit("yourTurn", moveArr)

        waitingUser = undefined
    } else {
        waitingUser = socket.id
    }
    console.log(waitingUser)


    socket.on("clicked", (data) => {
        // console.log(data, data.player.id)

        Room.findOne({
            $or: [{
                user1: data.player.id
            }, {
                user2: data.player.id
            }]
        }, function (err, gameRoom) {
            if (err) return handleError(err);
            // Prints "Space Ghost is a talk show host".
            // console.log("room", room);
            let roomId = gameRoom._id


            let newTurn;
            if (gameRoom.turn == "w") {
                newTurn = "b"
            } else {
                newTurn = "w"
            }
            let updatedTab = reversi.move(data.player.color, gameRoom.gameArray, data.coordX, data.coordZ)


            Room.findByIdAndUpdate(roomId, {
                "turn": newTurn,
                "gameArray": updatedTab
            }, function (err, result) {
                //console.log(err, result)
            })
            let sendData = {
                updatedTab: updatedTab,
                turn: newTurn,
            }

            let turnPlayer;
            let noTurnPlayer;
            if (gameRoom.color1 == newTurn) {
                turnPlayer = gameRoom.user1
                noTurnPlayer = gameRoom.user2
            } else {
                turnPlayer = gameRoom.user2
                noTurnPlayer = gameRoom.user1
            }

            let checkColor;
            if (newTurn == "w") {
                checkColor = "w"
            } else {
                checkColor = "b"
            }
            let moveArr = reversi.checkPlaces(checkColor, updatedTab)
            let moveExist = reversi.moveCheck(moveArr)


            if (moveExist) {
                io.to(turnPlayer).emit("yourTurn", moveArr)

                io.to(gameRoom.user1).to(gameRoom.user2).emit("gameUpdate", sendData)
            } else {
                let newerTurn;

                if (newTurn == "w") {
                    newerTurn = "b"
                } else {
                    newerTurn = "w"
                }

                Room.findByIdAndUpdate(roomId, {
                    "turn": newerTurn,
                }, function (err, result) {
                    //console.log(err, result)
                })

                sendData = {
                    updatedTab: updatedTab,
                    turn: newerTurn,
                }
                let checkColorNew;
                if (checkColor == "b") {
                    checkColorNew = "w"
                } else {
                    checkColorNew = "b"
                }

                moveArr = reversi.checkPlaces(checkColorNew, updatedTab)
                moveExist = reversi.moveCheck(moveArr)
                
                if (moveExist) {
                    io.to(noTurnPlayer).emit("yourTurn", moveArr)
                    io.to(gameRoom.user1).to(gameRoom.user2).emit("gameUpdate", sendData)
                    console.log("BRAK RUCHUUUUUUUUUUUUUUUUUUUUUU")
                }
                else{
                 
                    io.to(gameRoom.user1).to(gameRoom.user2).emit("gameEnd", sendData)
                    console.log("ENDDDDDDDDDDDDDDDDDDDDDDD")
                }
            }

        })



    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});







server.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})