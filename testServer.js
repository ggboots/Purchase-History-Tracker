
// const mongoose = require('mongoose');
// const weblogin = require('./backend/loginSchema')

// mongoose.connect(mongoURL, () => {
//     console.log("Connected to MongoDB")
// })

// run()
// async function run() { 
//     const user = new weblogin({username: 'George', password:'iguessyouworknow'})
//     await user.save()
//     console.log("Submitted to DB")
// }

import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI
const options = {}

let client 
let clientPromise

if(!process.env.MONGODB_URI){
    throw new Error('.env invalid:' + URI)
}

if(process.env.NODE.ENV === 'development'){
    if(!global._mongoClientPromise){
        client = new MongoClient(URI, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(URI, options)
    clientPromise = client.connect(
    )
}

export default clientPromise