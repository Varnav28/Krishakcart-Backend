const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//DB Connection Establish
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if(!err)
        console.log('DB Connected');
    else
        console.log('Not Connected and Error in DB' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;