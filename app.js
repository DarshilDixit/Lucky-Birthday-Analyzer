var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var outputMsg = document.querySelector("#output-msg");



checkButton.addEventListener("click", clickHandler);

function clickHandler(){
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    if(dob && luckyNumber.value){
        compareValues(sum, luckyNumber.value);
    } else{
        outputMsg.innerText = "Please enter both the fields"
    }
};

function calculateSum(dob){
    dob =  dob.replaceAll("-", "");
     let sum = 0;
     for(var i=0; i<dob.length; i++){
         sum = sum + Number(dob.charAt(i))
     };
    return sum;
};

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0){
      outputMsg.innerText = "Your birthday is lucky! 😀"
    } else{
        outputMsg.innerText = "Not that lucky 🙁"
    }
};