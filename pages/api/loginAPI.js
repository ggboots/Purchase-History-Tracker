import connectMongo from "../../backend/importConnectMongodb";
import loginSchema from "../../backend/loginSchema";

connectMongo();

export default async function handler(req,res){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    if(!login){
        return res.json({status: "incorrect password"})
    }
    else{
        
        return res.status(200).json(login)
    }
}