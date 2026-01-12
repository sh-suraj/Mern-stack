import http from "http";
const server = http.createServer((request, response) => {
  response.end("server started sheela!");
});

server.listen(5000, () => {
  console.log("Server running at the port:5000");
});
