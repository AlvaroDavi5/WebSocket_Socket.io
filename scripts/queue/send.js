const dotenv = require('dotenv');
dotenv.config();
const { sendMessage } = require('../../src/queue/sqs.js');

const queueFullUrl = process.env.QUEUE_FULL_URL || 'http://localhost:4566/000000000000/';
const queueName = process.env.QUEUE_NAME || 'DEFAULT_QUEUE.fifo';

const message = {
	message: 'Do you read Clean Architecture?',
	author: 'Robert Martin',
};

sendMessage(
	`${queueFullUrl}${queueName}`,
	'The Developer',
	'A.D.S.A.',
	message,
);
