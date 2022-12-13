import mongoose from "mongoose";

// https://medium.com/@abhi11210646/multiple-mongodb-database-connections-in-nodejs-ee4b75cc70e3

const connection = {};
// const connectionPurchase = {}

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

// async function connectPurchaseMongoDB(){
//     if(connectionPurchase.isConnected){
//         return;
//     }
//     const db = await mongoose.connect(process.env.MONGO_TICKER_PURCHASES_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })

//     connection.isConnected = db.connections[0].readyState;
// }

export default connectMongo;