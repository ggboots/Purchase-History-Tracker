import connectMongo from "../../backend/importConnectMongodb";
import loginSchema from "../../backend/loginSchema";
const jsonfile = require('jsonfile')
const cookieParser = require("cookie-parser");

connectMongo();
cookieParser();

export default async function handler(req,res){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    // res.setHeader('Custom-Header', username)

    req.cookies
    if(!login){
        return res.json({status: "incorrect password"})
    }
    else{
        jsonfile.writeFile('./backend/fromDatabase.json', login)
        res.setHeader('Set-Cookie',username)
        // document.localStorage.setItem(username, password)
        .then(res => {
            console.log('write complete')
        })
        .catch(error => console.log("login issues"))
        res.redirect('../')

    }
}

//cookies vs localstorage
// https://www.youtube.com/watch?v=AwicscsvGLg&t=338s&ab_channel=freeCodeCamp.org

// API - Acces data, hides abstraction (camera component, barometer), 
// also for security and 