const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); 
  res.end("Server is running"); 
});

server.listen(500, () => {
  console.log("Server is running on port 500"); 
});
