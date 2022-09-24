const socketIO = require('socket.io');


function createWebSocket(server) {
	// WebSocket assignment
	const webSocket = socketIO(server);

	return webSocket;
}

module.exports = createWebSocket;
