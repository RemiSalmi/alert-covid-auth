const express = require('express');
const router = express.Router();

//Init bp
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const authController = require('../controllers/authController');

//Get all bases
router.post('/',jsonParser, authController.getToken)

module.exports = router;