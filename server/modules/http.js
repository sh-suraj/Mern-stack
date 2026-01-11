//http module

import http from "http";

//create server
const app = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>hello ram</h1>");
});
app.listen(2000); //port
