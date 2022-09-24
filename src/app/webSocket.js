const socketIO = require('socket.io');


function createWebSocket(server) {
	// WebSocket assignment
	const websocket = socketIO(server);

	return websocket;
}

module.exports = createWebSocket;
