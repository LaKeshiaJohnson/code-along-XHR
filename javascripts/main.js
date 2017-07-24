console.log("main.js");

let startTime = Date.now();

console.log("startTime", startTime); //milliseconds from jan 1, 1970. 

/*for (var i = 0; i < 2000000; i++) {
	var x = i + 1/1 * 6 - 4;

}

console.log("I just looped", i, " times");
console.log("loop time", Date.now() - startTime);
*/

let bigDataRequest = new XMLHttpRequest();

bigDataRequest.addEventListener("load", bigDataComplete);
bigDataRequest.addEventListener("error", bigDataFailed);

function bigDataComplete(event){
	//debugger;
	if (event.target.status === 200) {
	console.log("THE BIG data has loaded");
	let bigData = JSON.parse(event.target.responseText);
	console.log("Time of Big Data", Date.now() - startTime);
	console.log("bigData", bigData);
	}else{
		console.log("check the spelling of your file");
	}
}
function bigDataFailed(event){
	console.log("oops the data failed");
}

bigDataRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
bigDataRequest.send();




let dataRequest = new XMLHttpRequest(); //XMLHttpRequest -object that contains all these methods that allows us to get data

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);


function dataRequestComplete(event){
	console.log("colors have loaded");
	let colorData = JSON.parse(event.target.responseText);
	console.log("color data", colorData);
	showData(colorData);
}

function showData(colors){
	let colorDiv = document.getElementById("all-my-colors");
	let colorData = " ";


	for(item in colors){
		let colorItem = colors[item];
		colorData += "<div>";
		colorData += "<h2>" + colorItem.color + ":" + colorItem.value + "</h2>";
		colorData += "</div>";
	}

	colorDiv.innerHTML += colorData;
	console.log("colors are done time", Date.now() - startTime);
}

function dataRequestFailed(event) {
	console.log("dataFailed", event);
}

dataRequest.open("GET", "color.json") // request to retrieve json file
dataRequest.send(); 