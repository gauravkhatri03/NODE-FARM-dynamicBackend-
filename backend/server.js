var http = require('http');
var fs = require('fs');
var url = require('url');
var replaceP = require("./link-product");
var replaceO = require("./link-overview");
var server = http.createServer(function(req, res){
    var path = req.url;
    var pathx = url.parse(req.url).pathname;
    if(path === "/" || path === "/overview"){
        var data = replaceO();
        res.writeHead(302, {"content-type" : "text/html"});
        res.write(data);
    }
    else if(path === "/api"){
        var data = fs.readFileSync("./data.json");
        res.writeHead(300, {"content-type" : "application/json"});
        res.write(data);
    }
    else if(pathx === "/product"){
        var x = path.charAt(path.length - 1);
        var data = replaceP(x);
        res.writeHead(302, {"content-type" : "text/html"});
        res.write(data);
    }
    else{
        res.writeHead(404);
        res.write("error 404: page not found");
    }
    res.end();
});
var port = process.env.PORT||80;
server.listen(8000);
console.log("server started at port 8000");