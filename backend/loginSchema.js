// Schema - tells db structure of data
// const mongoose = require("mongoose");
import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unqiue: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
  },
  {
    collection: "Users"
  }

);

// checks for already made database
// OR create new database if not present
module.exports = mongoose.models.loginSchema || mongoose.model("loginSchema", loginSchema);
