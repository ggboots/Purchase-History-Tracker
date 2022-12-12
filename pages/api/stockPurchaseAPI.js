// import connectPurchaseMongoDB from "../../backend/importConnectPurchaseMongodb";
import connectMongo from "../../backend/importConnectMongodb";
import stockPurchaseSchema from "../../backend/stockPurchaseSchema";

connectMongo();

export default async function handler(req,res){
    try {
        const user = await stockPurchaseSchema.create(req.body);
        res.redirect('../')
        if(!user){
            return res.json({code:'User not found'})
        }
    } catch(error){
        res.status(400).json({status:'error found when'})
    }
}