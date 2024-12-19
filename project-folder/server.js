const http = require('http');
const requestHandler = require('./requestHandler');

const port = 8081;

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.log("server Not start.");
        return false;
    }

    console.log("server start.");
    console.log("http://localhost:" + port);
})