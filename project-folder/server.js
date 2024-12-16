
const http = require("http");
const fs = require("fs");
const path = require("path");


function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 - Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}


const server = http.createServer((req, res) => {
  
  const url = req.url;
  if (url === "/" || url === "/home") {
    serveFile(res, path.join(__dirname, "index.html"), "text/html");
  } else if (url === "/about") {
    serveFile(res, path.join(__dirname, "about.html"), "text/html");
  } else if (url === "/contact") {
    serveFile(res, path.join(__dirname, "contact.html"), "text/html");
  } else {
    // Handle 404 - Page Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
