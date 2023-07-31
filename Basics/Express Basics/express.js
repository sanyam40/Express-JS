const express = require("express");
const path=require('path');
const reqfilter=require('./middleware')
const app = express();

const publicPath=path.join(__dirname,'public');

app.set('view engine', 'ejs');

app.use(reqfilter);

app.get("/",reqfilter, (request, response) => {
  response.send("<h2>HELLO</h2><a href='/test'>TEST PAGE</a>");
});

app.get("/contact", (request, response) => {
    const name='sanyam';
    response.render('contact',{name});
  });

app.get("/test", (request, response) => {
  response.send({
    name: "SANYAM",
    age: "20",
  });
});

// ------------------  404 PAGE  ------------------
app.get('*', (request, response) => {
    response.send("<h2>404 PAGE NOT FOUND</h2>");
});

// ------------------  SERVING STATIC FILES  ------------------

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)

});

//app.use(express.static(publicPath));

app.listen(3000, () => console.log("Server ready at : http://localhost:3000"));
