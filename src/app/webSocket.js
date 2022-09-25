const { Server } = require('socket.io');


function initWebSocket(httpServer) {
	// WebSocket assignment
	const webSocket = new Server(httpServer);

	return webSocket;
}

module.exports = initWebSocket;
