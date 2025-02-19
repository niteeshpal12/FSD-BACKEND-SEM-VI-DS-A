const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    if(req.url=='/home'){
        res.end("welcome to home page");
    }
    else if(req.url=='/about'){
        res.end("This is about page");
    }
    else if(req.url=='/contact'){
        res.end('contact us page');
    }
    else{
        res.writeHead(404);
        res.end("page not found");
    }
})

server.listen(900)