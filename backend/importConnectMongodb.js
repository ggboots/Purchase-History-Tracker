import mongoose from "mongoose";

const connection = {};

async function connectMongo(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(process.env.MONGO_URI)

    connection.isConnected = db.connections[0].readyState;
}

export default connectMongo;