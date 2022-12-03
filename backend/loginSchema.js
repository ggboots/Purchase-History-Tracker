// this is the format passed into the mongod
// Schema - tells db structure of data
const mongoose = require("mongoose");

// import { Schema, model, models } from "mongoose";

// const userDetails = new Schema({
//     username: String,
//     password: {
//         type: String,
//         required: true,
//         unique: true,
//     },
// });

// const Test = models.test || model('test', testSchema)

// export default Test;

const loginSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    // password: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // }
  },
  { 
    collection: "weblogin",
}
);

mongoose.model("weblogin", loginSchema);
