import connectMongo from "../../backend/importConnectMongodb";
import loginSchema from "../../backend/loginSchema";

connectMongo();

export default async function handler(req,res){
    try {
        const user = await loginSchema.create(req.body);
        res.redirect('../')
        if(!username){
            return res.json({code:'User not found'})
        }
    } catch(error){
        res.status(400).json({status:'error found when'})
    }
}