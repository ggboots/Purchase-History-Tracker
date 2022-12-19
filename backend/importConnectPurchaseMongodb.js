import mongoose from "mongoose";

const connection = {};

async function connectPurchaseMongoDB(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_TICKER_PURCHASES_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState;
}

export default connectPurchaseMongoDB

 