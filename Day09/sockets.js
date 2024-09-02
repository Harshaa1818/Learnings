const http = require('http')
const express = require('express')
const ioServer = require('socket.io')

const app = express()
const server = http.createServer(app)

const io = ioServer(server)

server.listen(8000,e=> console.log(`server is listening on PORT:${8000}`))

io.on("connection",(socket)=>{
    io.emit("send-reply",socket.id)
})

io.off("connection",socket=> console.log("connection stopped ", socket.id))