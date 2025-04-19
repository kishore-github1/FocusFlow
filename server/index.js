const express = require('express');
const connectDB = require('./mongodb/connect')
require('dotenv').config()

 
const app = express();
const port = 3000;


app.get('/',(req,res)=>{
    res.send("Hello world");
});


const StartServer = ()=>{
    connectDB(process.env.MONGODB_URL);
    app.listen(port, ()=> console.log(`Listening to port ${port}`));
}

StartServer();
