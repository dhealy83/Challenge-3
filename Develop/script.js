// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  var numberChar = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var allChar = numberChar, upperChars, lowerChars, specialChar;

  
function  getLower(){
 
}

function  getUpper(){

}

function  getNumber(){

}

function  getSpecial(){

}



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  return 'Password'
  // prompt user for length

  // prompt user to confirm Character choices

  // generate the password using input

  // return the generated password
}