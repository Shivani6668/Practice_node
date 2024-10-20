const mongoose = require('mongoose')

const MONGODB_URL = "mongodb://localhost:27017/Resturant"

mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to mongoose Server");
})
db.on('disconnected',()=>{
    console.log("MongoDB Disconnected");
})
db.on('error',()=>{
    console.log("Error");
})

module.exports = db;