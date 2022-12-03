require('dotenv').config();
const express = require('express');
const app = express()
const mongoose = require('mongoose')

console.log(process.env)
app.listen(4200)

