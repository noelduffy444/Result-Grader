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

}//End of function