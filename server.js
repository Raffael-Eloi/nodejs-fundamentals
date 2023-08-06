const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.end('Alura node course');
});

server.listen(port, () => {
    console.log(`Server responding on port http://localhost:${port}`);
});