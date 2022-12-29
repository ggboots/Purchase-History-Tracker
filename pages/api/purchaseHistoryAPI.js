import connectMongoDB from "../../backend/connectMongoDB";
import stockPurchaseSchema from "../../backend/stockPurchaseSchema";

connectMongoDB();

export default async function handler(req,res){
    try {
        const entries = await stockPurchaseSchema.find({username: {$all}});
        console.log(entries);
        res.redirect('../')
    } catch(error){
        res.status(400).json({status:error})
    }
}