// This will provide interactivity to the Password Generator application for users to create an random password based on user criteria

var generateBtn = document.querySelector("#generate");

// Set variables declarations

var confirmPasswordLength = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;

// Variable Arrays

var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Excluded double quote, backslash, underscore, grave accent (backtick) special characters from this array
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "{", "|", "}", "~"];

// This function will prompt the user to choose how many characters they want in their password between 8-128
function generatePassword() {
  var confirmPasswordLength = (prompt("How many characters would you like your password to contain (between 8-128 characters)?"));
  
  // This while loop will loop until the user picks a password within the condition below
  while(confirmPasswordLength <= 7 || confirmPasswordLength >= 129) {
    alert("Your password length must be between 8-128 characters. Please try again.");
    var confirmPasswordLength = (prompt("How many characters would you like your password to contain (between 8-128 characters)?"));
    }

    // These will prompt the user to confirm what criteria they would like or not like in their randomly-generated password
    var confirmLower = confirm("Click OK to confirm if you would like your password to contain lowercase alphabet characters");
    var confirmUpper = confirm("Click OK to confirm if you would like your password to contain uppercase alphabet characters");
    var confirmNumeric = confirm("Click OK to confirm if you would like your password to contain numerical characters");
    var confirmSpecial = confirm("Click OK to confirm if you would like your password to contain special characters");
  
  // This while loop will loop through until the user picks at least one of the following criteria to be a part of their password
  while(confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial === false) {
    alert("You must choose at least one of the criteria to move forward with the random password generation");
    var confirmLower = confirm("Click OK to confirm if you would like your password to contain lowercase alphabet characters");
    var confirmUpper = confirm("Click OK to confirm if you would like your password to contain uppercase alphabet characters");
    var confirmNumeric = confirm("Click OK to confirm if you would like your password to contain numerical characters");
    var confirmSpecial = confirm("Click OK to confirm if you would like your password to contain special characters");
  }

    var passwordCharacters = []
      
    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lowerCaseAlphabet)
    }

    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(upperCaseAlphabet)
    }

    if (confirmNumeric) {
      passwordCharacters = passwordCharacters.concat(numericCharacters)
    }

    if (confirmSpecial) {
      passwordCharacters = passwordCharacters.concat(specialCharacters)
    }
    
    // This will log into the console
    console.log(passwordCharacters)

    // This variable will generate the random password based on the below for loop selecting random characters from the variable arrays above
    var randomPassword = ""
      for (var i = 0; i < confirmPasswordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);