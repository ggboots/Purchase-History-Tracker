import mongoose from 'mongoose';

const connection = {};

async function connectMongoDB(){
    
    // if already connected
    if(connection.isConnected){
        return;
    }
    // connects database
    // connect has default settings no further configuration needed
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    // removes bugs by placing into readyState
    connection.isConnected = db.connections[0].readyState;
}

export default connectMongoDB