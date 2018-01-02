/**
 * Read input text file in Nodejs
 **/

// Initialize fs module
var fileSystem = require("fs");

// Read file
fileSystem.readFile("/var/www/html/learnJS/JSLearning/Nodejs/FileReader/assets/text_files/readFile.txt",(err,data)=>{
	if(err){
		throw err;
	}
	console.log(data.toString());
});

// End line
console.log("Completed");