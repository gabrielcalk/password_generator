var validNumber = []
var finalPassword = []

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){

  var passwordLength = parseInt(prompt("How many characters do you want?"));

  if (isNaN(passwordLength)) {
    alert('Please Enter a Number');
    generatePassword();
  }

  if (passwordLength == null) {
    alert('Please Enter a Number');
    generatePassword();
  }

  if (passwordLength <= 8 || passwordLength >= 128){
    alert('Please enter a proper password. \nThe password should not be with less than 8 characters or more than 128.')
    generatePassword()
  }


  var numericCharacters = confirm('Do You Want Numbers?')
  if (numericCharacters){
    validNumber.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  } 


  var specialCharaters = confirm('Do you want especial Characters?')
  if (specialCharaters){
    validNumber.push('@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.');
  }


  var upperCasedCharacters = confirm('Do You Want Upper Cased Characters?')
  if (upperCasedCharacters){
    validNumber.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  }


  var lowerCasedCharacters = confirm('Do You Want Lower Cased Characters?')
  if (lowerCasedCharacters){
    validNumber.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
  }

  if(!numericCharacters&&!specialCharaters&&!upperCasedCharacters&&!lowerCasedCharacters){
    alert('You must choose at least one option')
    return generatePassword()
  }

  for(var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * passwordLength);
    finalPassword.push(random)
  }
}


console.log(validNumber)
console.log(finalPassword)
