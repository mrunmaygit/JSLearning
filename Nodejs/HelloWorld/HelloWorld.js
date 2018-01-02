/**
 * Create server and log message
 **/

// Create http instance 
var http = require("http");

// Configure server
var server = http.createServer((request,response)=>{
	response.statusCode = 200;
	response.setHeader("Content-Type","text/plain");
	response.end("Hello World");
});

// Set port for server
server.listen("8085","127.0.0.1",()=>{console.log("Server started")});

