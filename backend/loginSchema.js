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

);

// checks for already made database (login)
// OR create new database if not present (Register)
module.exports = mongoose.models.loginSchema || mongoose.model('loginSchema', loginSchema) 

// Data in API folder are treated as API endpoints not, they are server side only

// this should not be a React Component
