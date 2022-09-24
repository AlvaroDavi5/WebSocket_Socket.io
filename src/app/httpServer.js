const http = require('http');


function createServer(app) {
	// HTTP server assignment
	const server = http.createServer(app);

	console.log('Started HTTP Server');
	return server;
}

module.exports = createServer;
