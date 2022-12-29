// import mongoose from "mongoose";
const mongoose = require('mongoose')

const connection = {};

async function connectMongo(){

    const db = await mongoose.createConnection(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

}

export default connectMongo;