const dbconnection = require('./mongodb')

// let data = await collection.find({}).toArray();
// console.log(data);

dbconnection().then((collection) => {
    collection.find({}).toArray().then((data) => {
        console.log(data)
    })
})