const { io } = require('socket.io-client');


class WebSocketClient {

	constructor(socketUrl) {
		this.socket = io(socketUrl);
	};

	_formatMessageBeforeSend(message) {
		let msg = '';

		try {
			msg = JSON.stringify(message);
		}
		catch (error) {
			msg = String(message);
		}

		return msg;
	};
	_formatMessageAfterReceive(message) {
		let msg = '';

		try {
			msg = JSON.parse(message);
		}
		catch (error) {
			msg = String(message);
		}

		return msg;
	};

	// send message to the server
	send(event, msg) {
		msg = this._formatMessageBeforeSend(msg);

		this.socket.emit(
			String(event),
			msg,
		);

	};

	// receive message from the server
	receive(event) {
		let message = '';

		this.socket.on(
			String(event),
			function (msg) {
				message = msg;
			},
		);

		return this._formatMessageAfterReceive(message);
	};

};


module.exports = WebSocketClient;
