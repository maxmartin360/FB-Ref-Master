var count = [];

$(document).ready(function() {

	var input;
	while(true){
		input = getInput();
		if(input){
			break;
		} 
	}

	for(var i = 1; i<= input; i++) {
		fizzbuzz(i)
	}//fizzbuzz(parse);

	document.write(count);
});

function getInput() {
	var input = prompt("Please enter a value:");
	var parse = parseInt(input);
	if(parse === NaN) {
		alert("Please enter a valid number")
		return false;
	}
	if (input % 1 != 0){
		alert("Please enter a whole number")
		return false;
	}
	return parse;
}

function fizzbuzz(i){
	if (i % 5 == 0 && i % 3 == 0) {
	count.push("Fizzbuzz");
	} else if(i % 3 == 0) {
    count.push("Fizz");
	} else if(i % 5 == 0) {
	count.push("Buzz");
    } else 
    count.push(i);	
};
