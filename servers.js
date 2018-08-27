// Require/import the HTTP module
var http = require("http");

var PORT = 7000;
// var PORT2 = 7500;

var nice = ["You look nice today",
            "I really like your smile",
            "That is a good color on you!",
            "Have you lost some weight?"];
var mean = ["Probably should have thought twice about that outfit",
            "Maybe less fast food yeah?",
            "Just curious but are you color blind?",
            "I think it's good your parents still support you despite everything"];

function port1HandleRequest(request, response){
    var random = Math.floor(Math.random() * nice.length);
    var path = request.url;
    switch(path){
        case "/":
            response.end("Hello fellow human!")
            break;
        case "/nice":
            response.end(nice[random]);
            break;
        case "/mean":
            response.end(mean[random]);
            break;
    }
    // response.end(nice[random]);
}

// function port2HandleRequest(request, response){
//     var random = Math.floor(Math.random() * mean.length);
//     response.end(mean[random]);
// }

var server1 = http.createServer(port1HandleRequest);
// var server2 = http.createServer(port2HandleRequest);

server1.listen(PORT, function(){
    console.log("Server is listening on: http://localhost:" + PORT);
})

// server2.listen(PORT2, function(){
//     console.log("Mean server is listening on: http://localhost:" + PORT2);
// })