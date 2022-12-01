// this is the format passed into the mongod

import { Schema, model, models } from "mongoose";

const userDetails = new Schema({
    username: String,
    password: {
        type: String,
        required: true,
        unique: true,
    },
});

const Test = models.test || model('test', testSchema)

export default Test;