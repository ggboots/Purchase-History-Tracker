import mongoose from "mongoose";

const connection = {};

async function connectMONGODB(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.createConnection(process.env.MONGO_TICKER_PURCHASES_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    // const userSchema = new Schema({ name: String, password: String });
    const Usermodel = db.model('loginSchema', userSchema)

    module.exports = Usermodel
}

export default connectMONGODB