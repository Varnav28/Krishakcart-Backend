const express = require('express');
const router = express.Router();

// Validation
const tokenValidate = require("../validations/token.validation").verifyJwtToken;
const SellerValidate = require("../validations/seller.Validate");

//Controllers
const ctrlSeller = require("../controllers/seller.controller");

//localhost:3000/SellerValidate.validate('createSeller')

router.post('/createSeller', ctrlSeller.createSeller);

router.route('createSeller/:uid')
      .get(tokenValidate, ctrlSeller.getProfile)
      .patch(tokenValidate, SellerValidate.validate('updateProfile'), ctrlSeller.updateProfile);

module.exports = router;