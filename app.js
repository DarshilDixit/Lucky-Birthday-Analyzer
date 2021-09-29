var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");



checkButton.addEventListener("click", clickHandler);

function clickHandler(){
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
}

function calculateSum (dob){
    dob = dob.replaceAll("-", "");
    
}