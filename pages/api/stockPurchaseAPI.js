import connectPurchaseMongoDB from "../../backend/importConnectPurchaseMongodb";
import stockPurchaseSchema from "../../backend/stockPurchaseSchema";

connectPurchaseMongoDB();

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