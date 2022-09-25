const { SQS, listParams, createParams, msgParams, receiveParam } = require('./util.js');

module.exports = {
	listQueues: async () => {
		SQS.listQueues(listParams, function (err, data) {
			if (err) {
				console.error('List Error:', err);
			}
			else {
				const queueUrls = data?.QueueUrls || [];
				console.log('Queues:');
				console.table(queueUrls);
			}
		});
	},

	createQueue: async (queueName) => {
		SQS.createQueue(createParams(queueName), function (err, data) {
			if (err) {
				console.error('Creation Error:', err);
			}
			else {
				const queueUrl = data?.QueueUrl;
				console.log('Created Successfully:');
				console.table({ queueUrl });
			}
		});
	},

	deleteQueue: async (queueUrl) => {
		SQS.deleteQueue({ QueueUrl: queueUrl }, function (err, data) {
			if (err) {
				console.error('Error to Delete:', err);
			}
			else {
				console.log('Deleted Successfully:');
				console.table({ queueUrl, requestId: data?.ResponseMetadata?.RequestId });
			}
		});
	},

	sendMessage: async (queueUrl, title, author, message) => {
		SQS.sendMessage(msgParams(queueUrl, message, title, author), function (err, data) {
			if (err) {
				console.error('Send Error', err);
			}
			else {
				console.log('Send Successfully:');
				console.table({ messageId: data?.MessageId });
			}
		});
	},

	getMessage: async (queueUrl) => {
		SQS.receiveMessage(receiveParam(queueUrl), function (err, data) {
			if (err) {
				console.error('Receive Error', err);
			}
			else if (data?.Messages) {
				console.log(`Messages (${Array(data?.Messages).length}):`);

				for (const message of data?.Messages) {
					console.log('----- Message -----');
					console.log(message);
					console.log('----- Message End -----');

					const deleteParams = {
						QueueUrl: queueUrl,
						ReceiptHandle: message.ReceiptHandle
					};
					SQS.deleteMessage(deleteParams, function (err, data) {
						if (err) {
							console.log('Error to Delete Message:', err);
						}
						else {
							console.log('Message Deleted:');
							console.table({ queueUrl, requestId: data?.ResponseMetadata?.RequestId });
						}
					});
				}
			}
		});
	},
};
