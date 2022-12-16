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
    }
  },

);

// checks for existing database (login) OR create new database (Register)
module.exports = mongoose.models.loginSchema || mongoose.model('loginSchema', loginSchema) 
