const dbconnection = require('./mongodb')
const readData = require('./readData')

const updateData = async (data,dataTOUpdate) => {
    const db = await dbconnection();
    const result = await db.updateOne(data, dataTOUpdate)
    console.log(result)
}

// const data={ name: "sanyam narang" }
// const dataTOUpdate={ $set: { age: "89" } }
// updateData(data,dataTOUpdate)
// readData()

module.exports = updateData;