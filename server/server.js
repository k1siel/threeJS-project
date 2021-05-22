var express = require("express")
var app = express()
const PORT = 3000;
const path = require('path')


app.use(express.static(path.join(__dirname, "..", "dist")))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})