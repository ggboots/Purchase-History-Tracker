import connectMongo from "../../backend/importConnectMongodb";
import loginSchema from "../../backend/loginSchema";
import fs from 'fs/promises'
// const jsonfile = require('jsonfile')

connectMongo();

export default async function handler(req,res){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    if(!login){
        return res.json({status: "incorrect password"})
    }
    else{
        // const obj = {name: 'me'}
        // jsonfile.writeFile('../../fromDatabase.json', obj)
        // .then(res => {
        //     console.log('write complete')
        // })
        // .catch(error => console.log(error))
        res.status(200).json(login)

    }
}


//https://heynode.com/tutorial/readwrite-json-files-nodejs/