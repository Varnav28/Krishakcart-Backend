const express = require('express');
const router = express.Router();

//controllers
const ctrlEmail = require('../controllers/sendEmail.controller');

// localhost:3000/v1

//to post the data
router.post('/sendEmail', ctrlEmail.sendEmail);

module.exports = router;