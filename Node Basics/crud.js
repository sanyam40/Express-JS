// CRUD OPERATIONS ON FILES USING NODE JS

const fs=require('fs');
const path=require('path');

const dirpath=path.join(__dirname,'crud');
const filepath=`${dirpath}/hello.txt`;

// TO WRITE IN A FILE
fs.writeFileSync(filepath,'Hello World');

// TO READ FROM A FILE
fs.readFile(filepath,'utf-8',(err,data)=>{
    console.log(data.toString());
})

// TO UPDATE DATA IN A FILE
fs.appendFileSync(filepath,' this is node js',(err)=>{
   if(!err) console.log('data added successfully')
})

// TO RENAME A FILE
fs.rename(filepath,`${dirpath}/test.txt`,(err)=>{
    if(!err) console.log('file renamed successfully')
})

// TO DELETE A FILE
fs.unlinkSync(`${dirpath}/test.txt`)
