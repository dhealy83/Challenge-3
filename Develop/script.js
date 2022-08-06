// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  // prompt user for length
  let lengthPrompt = prompt("How long do you want you password to be? between 8 and 128 characters.")
  console.log(lengthPrompt);  

  if (lengthPrompt  < 8 || lengthPrompt > 128 ) {
    alert("Your password needs to be in range of 8 and 128.");
    let lengthPrompt = prompt("How long do you want you password to be? between 8 and 128 characters.");
  }
  
  var container = ""
  
  let numCon = confirm("Do you want numbers?")
  console.log(numCon);

  if (numCon) {
    container += number;
    console.log(container);
    }

  let lowerCaseCon = confirm("Do you want lower case letters?")
  console.log(lowerCase);  
  if (lowerCaseCon) {
    container += lowerCase;
    console.log(container);

    }

  let upperCaseCon = confirm("Do you want upper case letters?")
  console.log(upperCase);  
  if (upperCaseCon) {
    container += upperCase;
    console.log(container);

    }

  let specialCharCon = confirm("Do you want special character?")
  console.log(specialChar);
  if (specialCharCon) {
    container += specialChar;
    console.log(container);

    }

  





  // generate the password using input

  // return 'Password'



}