// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = charsLower.toUpperCase();
var charsNumbers = "1234567890";
var charsSpecial = "!@#$%^&*()_+";


function generatePassword() {

  var userLength = prompt("Enter the length of the password");
    if (userLength >= 8 || userLength <= 128) {
    if (userLength <8 || userLength > 128){
      alert('The password must be between 8 and 128 characters')
      generatePassword()
    }
    alert('Press Ok to continue')

      userLower=(confirm)('Do you want lowercase letters in your password?');
      userUpper=(confirm)('Do you want uppercase letters in your password?');
      userNums=(confirm)('Do you want numbers in your password?');
      userSpecial=(confirm)('Do you want special characters in your password?');
      if(!userLower && !userUpper && !userNums && !userSpecial){
        alert('You need to select at least one of the criteria.')
        return null
      }
}

var charSet =( userLower ? charsLower : '' )
            +( userUpper ? charsUpper : '' )
            +( userNums  ? charsNumbers : '' )
            +( userSpecial ? charsSpecial : '' );

 var password = ""
  for( var i=0; i<userLength; i++ ){
      var charPick = Math.floor(Math.random()*charSet.length);
      password += charSet[charPick];
  }

return password
}