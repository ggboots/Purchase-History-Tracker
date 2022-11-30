import mongoose from "mongoose";

const mongo_URI = "mongodb://localhost:4200/mongoConnect"

const connectDatabase = async () => {
    mongoose.connect(mongo_URI)

};

export default connectDatabase