const bodyParser = require('body-parser');
const express = require('express');
const router = require('../interface/api/routes.js');


function createRestApi() {
	// REST API assignment
	const app = express();

	// REST API configuration
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	// endpoints definition
	router(app);
	console.log('Created REST API');

	return app;
};

module.exports = createRestApi;
