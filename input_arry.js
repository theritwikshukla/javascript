

var inputArray = [];
var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
    const prompt=require("prompt-sync")({sigint:true});
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

//Print the array in the console.
console.log(inputArray);
