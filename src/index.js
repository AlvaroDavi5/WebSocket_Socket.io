const dotenv = require('dotenv');
dotenv.config();
const queueConsumer = require('./queue/consumer.js');
const { httpServer } = require('./utils.js')


// queue consumer start
queueConsumer.start();

// server start
const appPort = parseInt(process.env.APP_PORT) || 3000;
httpServer.listen(appPort);
console.log(`\nAplication started on port ${appPort}\n`);
