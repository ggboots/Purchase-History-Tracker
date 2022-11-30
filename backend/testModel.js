import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
    username: String,
    password: {
        type: String,
        required: true,
        unique: true,
    },
});

const Test = models.test || model('test', testSchema)

export default Test;