// libs import
const path = require('path');
const http = require('http');
const ejs = require('ejs');
const express = require('express');
const socketIO = require('socket.io');


// server assignment
const app = express();
const server = http.createServer(app);
const websocket = socketIO(server);

// server engine configuration
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// endpoint definition
app.use('/', (request, response) => {
	response.status(200);
	console.log(`[${request?.method}] /${request?.baseUrl} - ${response?.statusCode}`);
	response.render('index.html');
});

// websocket connection
const messages = [];
websocket.on('connection', (socket) => {
	console.log('Socket ID:', `${socket.id}`);

	// send message tho the client
	socket.emit('previousMessages', messages);

	socket.on('sendMessage', (data) => {
		messages.push(data);
		// receive message from the client
		socket.broadcast.emit('receivedMessage', data);
	});
});

// port definition
const appPort = parseInt(process.env.APP_PORT) || 3000;
server.listen(appPort);

