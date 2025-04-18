const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
const PORT = 55455;

server.listen(PORT, () => {
    console.log(`🛰️  Pylon WebSocket server is running on ws://localhost:${PORT}`);
});

const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('📡 Establishing a new connection with client');
    const connection = request.accept(null, request.origin);
    setInterval(() => {
        connection.sendUTF(new Date().getTime());
    }, 100);
});
