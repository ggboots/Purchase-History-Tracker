import mongoose from "mongoose";

const connection = {};

async function connectMongo(){
    if(connection.isConnected){
        return;
    }
    // use createConnection not connect
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState;
}

export default connectMongo;