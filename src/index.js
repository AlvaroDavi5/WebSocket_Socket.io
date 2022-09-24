// libs import
const restApi = require('./app/restApi.js');
const createHttpServer = require('./app/httpServer.js');
const createWebSocket = require('./app/webSocket.js');
const queueConsumer = require('./queue/consumer.js');


// queue consumer start
queueConsumer.start();

// server assignment
const server = createHttpServer(restApi);
const websocket = createWebSocket(server);

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
console.log(`\nAplication started on port ${appPort}\n`);
