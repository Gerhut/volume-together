var http = require('http')
var path = require('path')

var express = require('express')
var socketio = require('socket.io')

var app = express()
var server = require('http').Server(app)
var io = socketio(server)

io.serveClient(false)
io.on('connection', function (socket) {
  socket.on('volume', function (volume) {
    for (var id in io.connected) {
      var client = io.connected[id]
      if (client != socket) {
        client.emit('volume', volume)
      }
    }
  })
})

app.use(express.static(path.join(__dirname, 'public')))

server.listen(process.env.PORT || 3000)
