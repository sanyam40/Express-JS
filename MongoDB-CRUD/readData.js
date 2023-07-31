const dbconnection = require('./mongodb')

const readData = async () => {
    let db = await dbconnection();
    let data = await db.find({}).toArray();
    return data;
}

module.exports = readData;