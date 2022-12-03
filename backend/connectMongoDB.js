require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

// Middleware, runs before the final route call is made
app.use(cors());
app.use(express.json());

mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to Mongodb");
    }).catch((e) => {
        console.log(e)
    });


// const newUser = new createNewUser({ name: "George", password: "password" });
// newUser.save().then(() => console.log("Saved"));

require("./loginSchema");

const createNewUser = mongoose.model('weblogin');
app.post('/login', async (req,res) => {
    const {username, password} = req.body;
    try {
        await createNewUser.create({
            username,
            password,
        })
        res.send({status: "ok"})
    } catch (e) {
        res.send({status:"error"})
    }
})

app.listen(9000, () => {
    console.log("Server Start")
})