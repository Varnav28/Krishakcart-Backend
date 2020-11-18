require('../models/seller.model');

const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Seller = mongoose.model('seller');
const SellerUpdate = mongoose.model('sellerUpdate');

// To Create Seller Profile
module.exports.createSeller = async (req, res, next) => {
    try {
        console.log(req);
        const errors = await validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

        if(!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array()});
            return;
        }
        const { uid, email, contact, fname, lname } = req.body
        var seller = await Seller.create({uid, email, contact, fname, lname, status : false});
        res.json(seller)
    } catch (err) {
        return next(err)
    }
}

// To Get Seller Profile
module.exports.getProfile = async (req, res, next) => {
    Seller.findOne({uid: req.params.uid}, {}, (err, data) => {
        if(err) {
            console.log('Error from getProfile: '+ err);
        } else {
            console.log(data);
            res.json(data);
        }
    })
}

// To Update the seller profile
module.exports.updateProfile = async (req, res, next) => {
    try {
        const errors = await validationResult(req);

        if(!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array()});
            return;
        }
        
        req.body['status'] = true;
        SellerUpdate.findOneAndUpdate({uid: req.params.uid}, {$set: req.body}, {new: true, projection:{status: true, _id: false}}, (err, data) => {
            if(err) {
                console.log('Error from updateProfile: '+ err);
            } else {
                res.json(data);
            }
        })
    } catch (err) {
        return next(err)
    }
}