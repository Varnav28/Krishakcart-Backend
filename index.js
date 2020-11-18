require('./config/config');
require('./models/db');

//Framework
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Routes Index
var rtsSellerIndex = require('./routes/sellerRoutes');

var app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

// API Gateway
app.use('/', rtsSellerIndex);

//Start Server
app.listen(process.env.PORT,() => console.log(`server started at port : ${process.env.PORT}`));