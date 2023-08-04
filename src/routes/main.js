const express = require('express');
const route = express.Router();
const { search } = require('../controller/mainController');

/* "/" */
route.get('/', search );
// route.get('/', mainController.home );


module.exports = route;