import { connectDatabase } from '../../../backend/connectDb';
import Test from '../../../backend/testModel';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addTest(req,res) {
    const {name, email} = req.body;
    
    console.log("connecting ..")
    await connectDatabase();
    console.log("connected")

    console.log("creating Schema")
    const test = await Test.create(req.body);
    console.log("created schema")

    res.json({test})
}