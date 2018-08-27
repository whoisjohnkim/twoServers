// Require/import the HTTP module
var http = require("http");
var fs = require('fs');
var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    var path = req.url;
    switch(path){
        case "/":
            readFile(req, res, "/home.html");
            break;
        case "/foods":
            readFile(req, res, "/foods.html");
            break;
        case "/movies":
            readFile(req, res, "/movies.html");
            break;
        case "/frameworks":
            readFile(req, res, "/frameworks.html");
            break;
    }
}

function readFile(req, res, fileName){
    fs.readFile(__dirname + fileName, function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
}

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });