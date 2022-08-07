// Assignment Code.
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var password = ""
  var number = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  
  // Prompt user for length
  let lengthPrompt = prompt("How long do you want you password to be? Between 8 and 128 characters.");
  lengthPrompt = Number(lengthPrompt)
  
  // Sets off an alert when the user picks a length outside of the range.
  // if (lengthPrompt  < 8 || lengthPrompt > 128  == false) {
  //   // If lengthPrompt = false the script starts over.
  // } else {
  //   alert("Your password needs to be in range of 8 and 128.");
  //   window.location.reload(true);
  // } 
  if ((lengthPrompt  < 8 || lengthPrompt > 128)  == false) {
  } else alert("Your password needs to be in range of 8 and 128."); {
    
    console.log(lengthPrompt);
    // generatePassword();
  } 
  

  // let lengthPrompt = prompt("How long do you want you password to be? between 8 and 128 characters.");
  
  var container = "" 
  // Prompts user for numbers. Returns true of false boolean.
  let numCon = confirm("Do you want numbers?");
  // Puts the numbers, if selected, into the container var using += .
  if (numCon) {
    container += number;
    console.log(numCon);
  }
  // Prompts user for lower case. Returns true of false boolean.
  let lowerCaseCon = confirm("Do you want lower case letters?")
  console.log(lowerCaseCon);  
  // Puts the lower case letters, if selected, into the container var using +=.
  if (lowerCaseCon) {
    container += lowerCase;
    
  }
  //Prompts user for upper case. Returns true or false boolean/
  let upperCaseCon = confirm("Do you want upper case letters?")
  console.log(upperCaseCon);  
  // Puts the upper case letters, if selected, into the container var using += .
  if (upperCaseCon) {
    container += upperCase;
    
  }
  // Prompts user for special characters. Returns true or false boolean.
  let specialCharCon = confirm("Do you want special character?")
  console.log(specialCharCon);
  // Puts the special characters, if selected, into the container var using += .
  if (specialCharCon) {
    container += specialChar;
  }
  console.log(container);
  console.log(typeof container);
  
  
  if ((numCon && lowerCaseCon && upperCaseCon && specialCharCon) == false) {
    alert("You mus select OK for at least one of the following: numbers, lower case, upper case, or special characters.");
    
  }
  
for (var i = 0; i < lengthPrompt; i++) {
  var randomNumber = Math.floor(Math.random() * container.length);
  password += container.substring(randomNumber, randomNumber +1);
}
console.log(password);
console.log(typeof password);

return password
}

// Write password to the #password input.
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
return;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

