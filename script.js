// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set variables for everything

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;
var userPrompts;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);