const dotenv = require('dotenv');
dotenv.config();
const queueConsumer = require('./queue/consumer.js');
const { httpServer, webSocket } = require('./utils.js');


// Queue Consumer start
queueConsumer.start();

// server start (WebSocket and REST)
webSocket;
const appPort = parseInt(process.env.APP_PORT) || 3000;
httpServer.listen(appPort, () => {
	console.log(`\nAplication started on port ${appPort}\n`);
});
