const bodyParser = require('body-parser');
const express = require('express');
const router = require('../interface/api/routes.js');


// REST API assignment
const app = express();

// REST API configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// endpoints definition
router(app);


module.exports = app;
