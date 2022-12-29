import mongoose from "mongoose";

const stockPurchaseSchema = new mongoose.Schema(
{
    ticker: {
      type: String,
      required: true,
    },
    quantity: {
        type: Number,
        // required: true,
    },
    costAtPurchases: {
        type: Number,
        // required: true,
    },
    dateOfPurchases: {
        type: String,
        // required: true,
    },
    username: {
      type: String,
    },
    // id causes freeze
    // _id: {
    //   type: String,
    // }
  },

);

// checks for existing database (login) OR create new database (Register)
module.exports = mongoose.models.stockPurchaseSchema || mongoose.model("stockPurchaseSchema", stockPurchaseSchema);