const dbconnection = require('./mongodb')
const readData = require('./readData')

const deleteData = async (dataToDeleted) => {
    const db = await dbconnection();
    const result = await db.deleteOne(dataToDeleted)
    return result;
}

// const dataToDeleted={ age: "99" }
// deleteData(dataToDeleted)

module.exports = deleteData;