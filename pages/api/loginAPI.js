import connectMongo from "../../backend/importConnectMongodb";
import loginSchema from "../../backend/loginSchema";
const jsonfile = require('jsonfile')

connectMongo();

export default async function handler(req,res){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    // res.setHeader('Custom-Header', username)

    // req.cookies
    if(!login){
        return res.json({status: "incorrect password"})
    }
    else{
        jsonfile.writeFile('./backend/fromDatabase.json', login)
        res.setHeader('Set-Cookie',username)
        console.log("User logged in")
        res.redirect('../')

    }
}

//cookies vs localstorage
// https://www.youtube.com/watch?v=AwicscsvGLg&t=338s&ab_channel=freeCodeCamp.org