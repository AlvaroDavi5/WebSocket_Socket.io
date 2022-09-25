const dotenv = require('dotenv');
dotenv.config();
const queueConsumer = require('./queue/consumer.js');
const { httpServer, webSocketServer } = require('./utils.js');


// Queue Consumer start
queueConsumer.start();
console.log('Started Queue Consumer');

// HTTP WebSocket init
webSocketServer.init();

// HTTP REST Server start
const appPort = parseInt(process.env.APP_PORT) || 3000;
httpServer.listen(appPort, () => {
	console.log(`\nAplication started on port ${appPort}\n`);
});
