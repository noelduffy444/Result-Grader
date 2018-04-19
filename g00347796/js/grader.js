function gradeResult() {

var myEnglishResult = parseInt(document.getElementById("value-english").value);
var myIrishResult = parseInt(document.getElementById("value-irish").value);
var myMathsResult = parseInt(document.getElementById("value-maths").value);
var englishGrade, irishGrade, mathsGrade;

if(!myEnglishResult){
	alert("Please enter your English result");
}
else {
	if (myEnglishResult > 90) {
		englishGrade = 'A';
	} else if (myEnglishResult > 80) {
		englishGrade = 'B';
	} else if (myEnglishResult >70) {
		englishGrade = 'B-';
	} else if (myEnglishResult > 60) {
		englishGrade = 'C';
	} else if (myEnglishResult > 40) {
		englishGrade = 'D';
	} else {
		englishGrade = 'F';
	}
	
	var message = 'Your English result of ' + myEnglishResult + ' gets you a grade of ' + englishGrade;
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	}

if(!myIrishResult){
	alert("Please enter your Irish result");
}
else {
	if (myIrishResult > 90) {
		irishGrade = 'A';
	} else if (myIrishResult > 80) {
		irishGrade = 'B';
	} else if (myIrishResult >70) {
		irishGrade = 'B-';
	} else if (myIrishResult > 60) {
		irishGrade = 'C';
	} else if (myIrishResult > 40) {
		irishGrade = 'D';
	} else {
		irishGrade = 'F';
	}
	
	var message = 'Your Irish result of ' + myIrishResult + ' gets you a grade of ' + irishGrade;
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	}

	if(!myMathsResult){
	alert("Please enter your Maths result");
}
else {
	if (myMathsResult > 90) {
		mathsGrade = 'A';
	} else if (myMathsResult > 80) {
		mathsGrade = 'B';
	} else if (myMathsResult >70) {
		mathsGrade = 'B-';
	} else if (myMathsResult > 60) {
		mathsGrade = 'C';
	} else if (myMathsResult > 40) {
		mathsGrade = 'D';
	} else {
		mathsGrade = 'F';
	}
	
	var message = 'Your Maths result of ' + myMathsResult + ' gets you a grade of ' + mathsGrade;
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	}
}//End of function