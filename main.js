const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://mahbubrimon:Black440@datacollect.ejtvfwo.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

console.log('Database connection established')

module.exports = {client};






