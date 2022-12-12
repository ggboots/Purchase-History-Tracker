import connectMongo from "../../backend/importConnectMongodb";
import loginSchema from "../../backend/loginSchema";
import fs from 'fs/promises'
const jsonfile = require('jsonfile')

connectMongo();

export default async function handler(req,res){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    if(!login){
        return res.json({status: "incorrect password"})
    }
    else{
        jsonfile.writeFile('./backend/fromDatabase.json', login)
        .then(res => {
            console.log('write complete')
        })
        .catch(error => console.log(error))
        res.redirect('../')

    }
}

//https://heynode.com/tutorial/readwrite-json-files-nodejs/