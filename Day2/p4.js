const http = require("http");

const users = [
    { id: 1, name: "john", age: 25 },
    { id: 2, name: "sjfkj", age: 45 },
    { id: 3, name: "sidjid", age: 76 }
];

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    const name=users.map(user)

    res.end(JSON.stringify(users));
});

server.listen(9001, () => {
    console.log("Server is running on port 9001");
});
