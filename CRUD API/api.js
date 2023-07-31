const express = require("express");
const app = express();
const readData= require('../MongoDB-CRUD/readData')
const createData= require('../MongoDB-CRUD/CreateData')
const deleteData= require('../MongoDB-CRUD/Delete')

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/api/readData",async(request,response)=>{
    const result=await readData();
    response.json(result);   
})

app.post("/api/CreateData",async(request,response)=>{ 
    const data=request.body;
    const result=await createData(data);
    response.json(result);
})

app.delete("/api/DeleteData",async(request,response)=>{
    const dataToDeleted=request.body;
    const result=await deleteData(dataToDeleted);
    response.json(result);   
})

app.listen(3000, () => console.log("Server ready at : http://localhost:3000"));

