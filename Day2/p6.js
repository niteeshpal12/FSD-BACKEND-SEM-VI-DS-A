const http = require("http");

const server = http.createServer(async (req, res) => {
  try {
    const url = "https://dummyjson.com/products";
    const options = { method: "GET", headers: { accept: "application/json" } };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log("data: ", data);
    const titles = data.products.map((item)=>item.title)
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.statusMessage = "Success";
    console.log("hello");
    res.end(JSON.stringify(titles));
  } catch (error) {
    console.log("error: ", error);
  }
});
server.listen(9010, (err) => {
  if (err) console.log("Error:", err);
  console.log("server is running at host://localhost:9010/");
});
