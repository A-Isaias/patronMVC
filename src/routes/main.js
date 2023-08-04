const express = require('express');
const route = express.Router();
const mainController = require('../controller/mainController');

/* "/" */
route.get('/', mainController.search );
// route.get('/', mainController.home );


module.exports = route;