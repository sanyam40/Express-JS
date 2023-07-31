const dbconnection = require('./mongodb')

const insertData = async (data) => {
    const db = await dbconnection();
    delete data._id;
    const result = await db.insertOne(data); // insert() instead of insertOne()
    return result;
  };
  

// const data={ name : "sanyam narang" , age:20 , city:"abc"}
// insertData(data)

module.exports=insertData;