const mongoose = require('mongoose');

// Connect to the first database
const firstDb = mongoose.createConnection(, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Connect to the second database
const secondDb = mongoose.createConnection(, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a model for the first database
const FirstModel = firstDb.model('loginschemas', new mongoose.Schema({
  name: String
}));

// Create a model for the second database
const SecondModel = secondDb.model('stockpurchaseschemas', new mongoose.Schema({
  name: String 
}));

// Use the models to query the databases
FirstModel.find({}, (error, docs) => {
  console.log(docs);
});

SecondModel.find({}, (error, docs) => {
  console.log(docs);
});





