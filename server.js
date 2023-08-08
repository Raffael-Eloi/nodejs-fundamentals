const http = require("http");
const port = 3000;

const routes = {
    '/': 'Alura node course',
    '/books': `Welcome to the book's page`,
    '/authors': `Welcome to the author's page`
};


const server = http.createServer((req, res) => {
    req.
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});