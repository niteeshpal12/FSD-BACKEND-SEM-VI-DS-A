const http = require('http');

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const response = await fetch('https://fakestoreapi.com/products');
        let jsonData = await response.json();

        

        const myhtml = `
        <html>
            <head>
                <title>MY Products</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h1 { color: blue; text-align: center; }
                    .product { border: 1px solid #ddd; padding: 10px; margin: 10px; width: 300px; text-align: center; }
                    img { max-width: 100%; height: auto; }
                </style>
            </head>
            <body>
                <h1>Products</h1>
                <div style="display: flex; flex-wrap: wrap; justify-content: center;">
                    ${jsonData.map(product => `
                        <div class="product">
                            <h2>${product.title}</h2>
                            <p>${product.description.substring(0, 100)}...</p>
                            <img src="${product.image}" height="200" width="150" alt="${product.title}">
                            <p><strong>Price: $${product.price}</strong></p>
                        </div>
                    `).join('')}
                </div>
            </body>
        </html>
        `;

        res.end(myhtml);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

server.listen(9000, (err) => {
    if (err) throw err;
    console.log('Server is running at http://localhost:9000');
});
