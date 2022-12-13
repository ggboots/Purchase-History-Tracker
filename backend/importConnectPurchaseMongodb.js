import mongoose from "mongoose";

const connection2 = {};

// change to CreateConnection

async function connectPurchaseMongoDB(){
    if(connection2.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_TICKER_PURCHASES_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState;
}

export default connectPurchaseMongoDB;