const { formatMessageBeforeSend, formatMessageAfterReceive } = require('./helpers/formatter.js');


class WebSocketServer {

	constructor(webSocketServer) {
		this.server = webSocketServer;
		this._formatMessageBeforeSend = formatMessageBeforeSend;
		this._formatMessageAfterReceive = formatMessageAfterReceive;
	};

	// send message to the client
	send(event, msg) {

		this.server.on('connection', (socket) => {
			console.log('Socket ID:', `${socket.id}`);

			//socket.broadcast.emit(); // send to all clients except the sender
			socket.emit(
				String(event),
				this._formatMessageBeforeSend(msg),
			);
		});

	};

	// receive message from the client
	receive(event, msg) {
		let message = '';

		this.server.on('connection', (socket) => {
			console.log('Socket ID:', `${socket.id}`);

			this.socket.on(
				String(event),
				function () {
					message = this._formatMessageAfterReceive(msg);
				},
			);
		});

		return message;
	};

};


module.exports = WebSocketServer;
