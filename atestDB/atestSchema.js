import mongoose from "mongoose";

const atestSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        password: {
            type: String,
        }

    },
);

module.exports = mongoose.models.atestSchema || mongoose.model('atest', atestSchema) 
