const { webSocketServer } = require('../../src/utils.js');


const message = webSocketServer.send('testEvent', { nome: 'alvaro' });
console.log(message);
