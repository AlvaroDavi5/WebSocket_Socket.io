const { webSocketClient } = require('../../src/utils.js');


const message = webSocketClient.receive('testEvent');
console.log(message);
