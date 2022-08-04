// Make sure to assign all variables first

// Assignment Code
// Sets our button up
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Values in function since they're only used locally anyway

function writePassword() {

var lowers = "abcdefghijklmnopqrstuvwxyz"
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var special = "!?@#$%^&*()"
// The solution to the more mundane of the two significant problems. Read it as a string, not an array! We make the array later
var fullArray = ""
var password = ""
// Get the parameters set
var passwordLength = window.prompt("How many characters long would you like your password to be?")
if (passwordLength < 8 || passwordLength > 156) {
  // Not sure how to make this loop back :/ (I'm telling on myself a little)
  alert("Insert valid number")
} else  {
  var makeLower = confirm("Would you like lowercase in your password?")
  var makeUpper = confirm("Would you like uppercase in your password?")
  var makeNumber = confirm("Would you like numbers in your password?")
  var makeSpecial = confirm("Would you like special characters in your password?")
   if (makeLower = true) {
    // Note the second significant problem's solution. With the concats correctly occurring in the strings and not the BOOLEANS, we get more than 4 choices from each string
    fullArray = fullArray.concat(lowers)
  }
  if (makeUpper = true) {
    fullArray = fullArray.concat(uppers)
  }
  if (makeNumber = true) {
    fullArray = fullArray.concat(numbers)
  }
  if (makeSpecial = true) {
    fullArray = fullArray.concat(special)
  }

  for (var i=0; i < passwordLength; i++) {
    var currentCharacter = Math.floor(Math.random() * fullArray.length)
    password += fullArray.substring(currentCharacter, currentCharacter + 1)
  }
// Run both functions in one. One function only existed to run the other anyway.
  document.getElementById("password").textContent = password
  }
} 





