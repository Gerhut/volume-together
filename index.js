var http = require('http')
var path = require('path')

var connect = require('connect')
var serveStatic = require('serve-static')
var WebSocket = require('ws')
var WebSocketServer = WebSocket.Server

var app = connect()
var server = http.createServer(app)
var wsServer = new WebSocketServer({server: server})

var currentMessage = 0

wsServer.on('connection', function (wsClient) {
  wsClient.send(currentMessage)
  wsClient.on('message', function (message) {
    currentMessage = message
    var wsClients = wsServer.clients
    for (var i = 0, l = wsClients.length; i < l; i++) {
      var iWsClient = wsClients[i]
      if (iWsClient.readyState == WebSocket.OPEN
        && iWsClient !== wsClient) {
        iWsClient.send(currentMessage)
      }
    }
  })
})

app.use(serveStatic(path.join(__dirname, 'public')))

server.listen(process.env.PORT || 3000)
