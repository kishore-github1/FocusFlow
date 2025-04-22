const express = require('express');
const connectDB = require('./mongodb/connect')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
 
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.use('/api/users', userRoutes);


const StartServer = ()=>{
    connectDB(process.env.MONGODB_URL);
    app.listen(port, ()=> console.log(`Listening to port ${port}`));
}

StartServer();
