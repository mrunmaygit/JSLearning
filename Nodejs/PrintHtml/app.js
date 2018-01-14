/**
 * Module assignmnet
 */
var http = require("http");
var file = require("fs");
var port = "8090";
var fileData;

/**
 * Read file contents
 */
function readFile(fileName){

	var data  =	file.readFileSync(fileName);
	return data.toString();
}

/**
 * Callback function for createServer()
 */
function handleCallback(req,res){
	if(req.url=="/exit"){

		var fileData = readFile("NodeExit.html");
	}
	else{

		var fileData = readFile("NodeWelcome.html");
	}

	res.writeHead("200",{
		"Content-Type" : "text/html"
	});
	res.write(fileData);
	res.end();
}

var server = http.createServer(handleCallback);
server.listen(port);
console.log(Date()+" server started at PORT :"+port);