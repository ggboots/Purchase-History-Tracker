// import mongoose from "mongoose";
const mongoose = require('mongoose')

const connection = {};
console.log(connection)
async function connectMongo(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.createConnection(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    // connection.isConnected = db.connections.readyState;
}

export default connectMongo;