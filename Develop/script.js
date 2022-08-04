// Make sure to assign all variables first

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowers = "abcdefghijklmnopqrstuvwxyz".split("")
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = "1234567890".split("")
var special = "!?@#$%^&*()".split("")
var length = 128
var fullArray = []
var password = ""

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


// Write password to the #password input
function writePassword() {

  var generatePassword = generatePassword();
  var passwordText = document.querySelector("#password");
  
passwordText.value = password;
}

// This is the part that creates a password
function generatePassword() {

var passwordLength = window.prompt("How many characters long would you like your password to be?")
if (passwordLength < 8 || passwordLength > 156) {
  alert("Insert valid number")
} else  {
  var makeLower = confirm("Would you like lowercase in your password?")
  var makeUpper = confirm("Would you like uppercase in your password?")
  var makeNumber = confirm("Would you like numbers in your password?")
  var makeSpecial = confirm("Would you like special characters in your password?")
  if (makeLower = true) {
    fullArray = fullArray.concat(makeLower)
  }
  if (makeUpper = true) {
    fullArray = fullArray.concat(makeUpper)
  }
  if (makeNumber = true) {
    fullArray = fullArray.concat(makeNumber)
  }
  if (makeSpecial = true) {
    fullArray = fullArray.concat(makeSpecial)
  }

  for (var i=0; i < passwordLength; i++) {
    currentCharacter = Math.floor(Math.random() * fullArray.length)
    password += currentCharacter
  }

  return password
  }
} 


