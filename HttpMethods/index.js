const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.method == "GET") {
    res.statusCode=404;
    res.end("get method");
  } else if (req.method == "POST") {
    res.end("post method");
  } else if (req.method == "PUT") {
    res.end("put method");
  } else if (req.method == "PATCH") {
    res.end("patch method");
  } else if (req.method == "DELETE") {
    res.end("delete method");
  }
});

server.listen(3000, () => {
  console.log("server started");
});
