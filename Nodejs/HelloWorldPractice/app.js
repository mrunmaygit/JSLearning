/**
 * HelloWorld Module practice
 **/
var http = require("http");

function setServer(req,res)
{
	console.log("here");
	console.log(req);
	res.writeHead(200,"Connected",{"Content-Type" : "text/plain"});
	const ip_address = res.socket.remoteAddress;
	res.end(`Your IP : ${ip_address}`);
}

 /**
  * Create a server 
  **/
var server = http.createServer(setServer);

server.listen(8090);

