import connectPurchaseMongoDB from "../../backend/importConnectPurchaseMongodb";
import stockPurchaseSchema from "../../backend/stockPurchaseSchema";

connectPurchaseMongoDB();
// change to CreateConnection

export default async function handler(req,res){
    try {
        const newEntry = await stockPurchaseSchema.create(req.body);
        console.log(newEntry);
        res.redirect('../')
    } catch(error){
        res.status(400).json({status:error})
    }
}