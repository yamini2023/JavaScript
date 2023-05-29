var http=require('http');


http.createServer((req,res)=>{
    res.write(req.url);
    res.write('Hi....Welcome to JavaScript');
    res.end();
    console.log('server running');
}).listen(8080)