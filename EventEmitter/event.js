const express= require("express");
const EventEmitter= require("events");

const app=express()
const event=new EventEmitter();
let count=0;

event.on("countAPI",()=>{
    count++;
    console.log("API count")
    console.log("count -> "+count)
})

app.get("/",(request,response)=>{
    response.send("API Called")
    event.emit("countAPI")
})

app.listen(3000, () => console.log('Server started on port 3000'));