import connectMongoDB from "../../backend/connectMongoDB";
import loginSchema from "../../backend/loginSchema";

connectMongoDB();

export default async function handler(req,res){
    try {
        const user = await loginSchema.create(req.body);
        res.redirect('../')
        if(!user){
            return res.json({code:'User not found'})
        }
    } catch(error){
        res.status(400).json({status:'error found when'})
        res.redirect('../');
    }
}