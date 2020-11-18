const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const firebaseConfig = {
    apiKey: "AIzaSyCMuDwBLTtDJb8Y17Dd5qOhKdFLUWHypj8",
    authDomain: "krishakkart-97903.firebaseapp.com",
    databaseURL: "https://krishakkart-97903.firebaseio.com",
    projectId: "krishakkart-97903",
    storageBucket: "krishakkart-97903.appspot.com",
    messagingSenderId: "728090444167",
    appId: "1:728090444167:web:013421740f0cbb529a1322",
    measurementId: "G-NM0583T340"
  }
admin.initializeApp(firebaseConfig);

module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if('authorization' in req.headers) 
        token = req.headers['authorization'].split(' ')[1]; //Bearer [token]
    
    if(!token)
        return res.status(403).send({ auth : false, message: 'No token provided.'});
    
    else {
        try {
            admin.auth().verifyIdToken(token).then(function(decodedToken) {
                req.uid = decodedToken.uid;
                next();
            })
        } catch (err) {
            throw new Error(err);
        }
    }
}