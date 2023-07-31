const http=require('http');

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(JSON.stringify({name:'sanyam',age:20}));
    res.end();

}).listen(200);
