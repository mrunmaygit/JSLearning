/**
 * Read input text file in Nodejs
 **/

// Initialize fs module
var fileSystem = require("fs");

// Read file
fileSystem.readFile("I:\\Mrunmay\\Work\\Learning_Projects\\JSLearning\\Nodejs\\FileReader\\assets\\text_files\\sampleCsv.csv",(err,data)=>{
	if(err){
		throw err;
	}
	//console.log(data.toString());
});

// Check file existance
if(fileSystem.existsSync("I:\\Mrunmay\\Work\\Learning_Projects\\JSLearning\\Nodejs\\FileReader\\assets\\text_files\\sampleCsv.csv")){
	console.log("File exists !");
}
// End line
console.log("Completed");