var express = require("express")
var app = express()
const PORT = 8080;
const path = require('path')
const http = require('http');
const bodyParser = require("body-parser")
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static(path.join(__dirname, "..", "dist")))


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})