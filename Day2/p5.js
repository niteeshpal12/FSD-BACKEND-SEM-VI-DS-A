const http=require('http')
const fs=require('fs/promises')
const server=http.createServer(async(req,res)=>{
    try {
        const data =  await fs.readFile('data.json','utf8')
        // console.log(data)
    
    
        res.setHeader('Content-Type','application/json');
        res.statusCode=200;
        res.statusMessage = 'Success'
        res.end(data);
    } catch (error) {
        console.log("error",error);
    }


})
server.listen(9010,(err)=>{
    if(err)
        console.log("Error:",err)
    console.log('server is running at host://localhost:9010/');
});