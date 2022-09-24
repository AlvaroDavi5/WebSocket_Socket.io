const socketIO = require('socket.io');


function initWebSocket(server, clients) {
	// WebSocket assignment
	const webSocket = socketIO(server, {
		path: '/websocket'
	});

	webSocket.on('connection', (socket) => {
		clients.push(socket);
		console.log(`Client connected: ${socket.id}`);
	});

	webSocket.on('disconnect', (socket) => {
		clients.splice(clients.indexOf(socket), 1);
		console.log(`Client disconnected: ${socket.id}`);
	});

	console.log('Initialized WebSocket');
	return webSocket;
}

module.exports = initWebSocket;
