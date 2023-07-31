const dbconnection = require('./mongodb')

const insertData=async()=>{
    const db=await dbconnection();
    const result=await db.insertOne(
        {
        name:"hello",
        age:"99"}
        )
    console.log(result)
}

insertData()