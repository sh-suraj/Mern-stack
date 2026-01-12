//http module

import http from "http";

//create server
const app = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  const data = {
    version: "0.1.0",
    name: "mern stack api",
    status: "ok",
  };
  if (request.url == "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Home page</h1>");
  } else if (request.url == "/about") {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>About page</h1>");
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Page not found!</h1>");
  }
  // response.writeHead(200, { "content-type": "application/json" });
  // response.end(JSON.stringify(data));
});
app.listen(2000); //port
