const dotenv = require('dotenv');
dotenv.config();
const { Consumer } = require('sqs-consumer');

const queueFullUrl = process.env.QUEUE_FULL_URL || 'http://localhost:4566/000000000000/';
const queueName = process.env.QUEUE_NAME || 'DEFAULT_QUEUE.fifo';

const consumer = Consumer.create({
	queueUrl: `${queueFullUrl}${queueName}`,
	handleMessage: async (message) => {
		console.log(message);
	}
});

consumer.on('error', (err) => {
	console.error(err.message);
});

consumer.on('processing_error', (err) => {
	console.error(err.message);
});


module.exports = consumer;
