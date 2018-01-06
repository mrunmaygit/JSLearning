$(document).ready(function(){
	$("#clickme").click(changeColor);
	console.log("document loaded");
});

$(window).on("load",function(){
	console.log("window loaded");
});

var colors=["green","yellow","blue","red","black","orange","violet","pink"];
var index = 0;
function changeColor () {
	if(index==7){
		index = 0;
	}
	$("#clickme").css("color",colors[index]);
	index++;
}

