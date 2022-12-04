import connectMongo from "../../backend/importConnectMongodb";
import loginSchema from "../../backend/loginSchema";

connectMongo();

export default async function handler(req,res){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    if(!username){
        return res.json({status: "not valid"})
    }
    else{
        res.redirect('../')
    }
    // try {
    //     const user = await loginSchema.create(req.body);
    // } catch(error){

    // }
}