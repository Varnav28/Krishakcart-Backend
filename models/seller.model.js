require('../config/config');

const mongoose = require('mongoose');

const sellerUserSchema = new mongoose.Schema({
    uid: {type: String, unique: true },
    // profilePicUrl: {type: String},
    // userType: {type: String},
    // compName: {type: String},
    email: { type: String, unique: true },
    fname: { type: String },
    lname: { type: String },
    contact: { type: Number },
    // state: { type: String},
    // district: {type: String},
    // subDistrict: { type: String},
    // block: { type: String},
    // vill: { type: String},
    // add: { type: String},
    // pincode: { type: String},
    // gst: {type: String},
    status: { type: Boolean }
});

module.exports = mongoose.model('seller', sellerUserSchema, 'Seller');

const userUpdateSchema = new mongoose.Schema({
    // uid: {type: String, unique: true },
    profilePicUrl: {type: String},
    userType: {type: String},
    compName: {type: String},
    // email: { type: String, unique: true },
    // fname: { type: String },
    // lname: { type: String },
    // contact: { type: Number },
    state: { type: String},
    district: {type: String},
    subdistrict: { type: String},
    block: { type: String},
    vill: { type: String},
    address: { type: String},
    pincode: { type: String},
    gst: {type: String},
    status: { type: Boolean }
});

module.exports = mongoose.model('sellerUpdate', userUpdateSchema, 'Seller');