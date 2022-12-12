import mongoose from "mongoose";

const stockPurchaseSchema = new mongoose.Schema(
{
    ticker: {
      type: String,
      required: true,
      unique: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    amountAtPurchases: {
        type: Number,
        required: true,
    },
    dateOfPurchases: {
        type: String,
        required: true,
    },
    username: {
      type: String,
    },
    _id: {
      type: String,
    }
  },

);

module.exports = mongoose.models.stockPurchaseSchema || mongoose.model("stockPurchaseSchemas", stockPurchaseSchema);
