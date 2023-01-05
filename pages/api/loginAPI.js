import connectMongoDB from "../../backend/connectMongoDB";
import loginSchema from "../../backend/loginSchema";
import stockPurchaseSchema from '../../backend/stockPurchaseSchema'
const jsonfile = require('jsonfile')

connectMongoDB();

export default async function handler(req,res){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    const {ticker} = req.body
    const purchaseSchema = await stockPurchaseSchema.findOne({ticker})
    // res.setHeader('Custom-Header', username)

    // req.cookies
    // https://codedamn.com/news/nextjs/next-js-cookie
    if(!login){
        return res.json({status: "incorrect password"})
    }
    else{
        jsonfile.writeFile('./backend/fromDatabase.json', login)
        jsonfile.writeFile('./backend/stockFromDatabase.json', purchaseSchema)
        res.setHeader('Set-Cookie',username)

        // window.localStorage.setItem(login)
        console.log("User logged in")
        res.redirect('../')

    }
}
