const { io } = require('socket.io-client');
const { formatMessageBeforeSend, formatMessageAfterReceive } = require('./helpers/formatter.js');


class WebSocketClient {

	constructor(socketUrl) {
		this.socket = io(socketUrl);
		this._formatMessageBeforeSend = formatMessageBeforeSend;
		this._formatMessageAfterReceive = formatMessageAfterReceive;
	};

	// send message to the server
	send(event, msg) {

		this.socket.emit(
			String(event),
			this._formatMessageBeforeSend(msg),
		);

	};

	// receive message from the server
	receive(event) {
		let message = '';

		this.socket.on(
			String(event),
			function (msg) {
				message = this._formatMessageAfterReceive(msg);
			},
		);

		return message;
	};

};


module.exports = WebSocketClient;
