const http = require('http');


function createServer(app) {
	// HTTP server assignment
	const server = http.createServer(app);

	return server;
}

module.exports = createServer;
