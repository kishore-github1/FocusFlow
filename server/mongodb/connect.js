const mongoose = require('mongoose');

const connectDB = (url) =>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, dbName: "FocusFlow" })
    .then(() => console.log('MongoDB connected'))
    .catch((err)=> console.log(err));
}

module.exports = connectDB;