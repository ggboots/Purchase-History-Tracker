// One of the major differences between require() and import() is that 
// require() can be called from anywhere inside the program 
// whereas import() cannot be called conditionally, it always runs at the beginning of the file.

const mongoose = require('mongoose');
// import mongoose from "mongoose";

// const connectDatabase = async () => {
//     mongoose.connect(mongo_URI)

// };

mongoose.connect('mongodb://localhost/demoDB');

mongoose.connection.once('open', function(){
    console.log("connected")
}).on('error', () => {
    console.log('connection failed')
})

// export default connectDatabase