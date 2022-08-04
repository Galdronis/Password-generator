// Make sure to assign all variables first

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowers = "abcdefghijklmnopqrstuvwxyz".split("")
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "1234567890".split("")
var special = "!?@#$%^&*()".split("")
var length = 128
var password = ""

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var length = prompt("How long would you like your password to be?")
  var makeLower = confirm("Would you like lowercase in your password?")
  var makeUpper = confirm("Would you like uppercase in your password?")
  var makeNumber = confirm("Would you like numbers in your password?")
  var makespecial = confirm("Would you like special characters in your password?")
  
  var generatePassword = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
