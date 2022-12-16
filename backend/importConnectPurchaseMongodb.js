import mongoose from "mongoose";

const connection = {};

// change to CreateConnection
// during connection, program only sees one database
// causing conflict with code, needs to be 
// broken into seperate connections 

// disabling connectiong to other db for testing
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

export default connectPurchaseMongoDB;


// https://medium.com/@abhi11210646/multiple-mongodb-database-connections-in-nodejs-ee4b75cc70e3
