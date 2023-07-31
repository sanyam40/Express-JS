const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const database = 'testdemo';
const client = new MongoClient(uri);

async function dbconnection() {

    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('crud');
    return collection;
}

module.exports = dbconnection;