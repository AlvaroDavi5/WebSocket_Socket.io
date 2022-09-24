function formatMessageBeforeSend(message) {
	let msg = `${message}`;

	try {
		msg = JSON.stringify(message);
	}
	catch (error) {
		msg = String(message);
	}

	return msg;
};

function formatMessageAfterReceive(message) {
	let msg = '';

	try {
		msg = JSON.parse(message);
	}
	catch (error) {
		msg = String(message);
	}

	return msg;
};


module.exports = {
	formatMessageBeforeSend,
	formatMessageAfterReceive,
};
