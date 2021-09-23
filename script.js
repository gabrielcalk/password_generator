// In this array I am saving the character that user want to use on the password 
var validNumber = [];

// In this variable I'm saving the random number of the password
var finalPassword = '';

// Bring the #generate id and #password id from html
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

passwordText.value = 'Your Secure Password';

// Write password to the #password input
function writePassword() {

// Cleaning the variable passwork to not concat if you generate the password again
  finalPassword = '';
  var password = generatePassword();
  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This is the function that is generating the random password
function generatePassword(){

// Asking how many character the user want on the password 
  var passwordLength = parseInt(prompt("How many characters do you want?"));

// If the value is not a number, then repeat the function that is generating the random password 
  if (isNaN(passwordLength)) {
    alert('Please Enter a Number');
    generatePassword();
  }

// if the value is nothing, then repeat the function that is generating the random password
  if (passwordLength == null) {
    alert('Please Enter a Number');
    generatePassword();
  }

// The passoword should be with more than 8 characters or less than 128
  if (passwordLength <= 8 || passwordLength >= 128){
    alert('Please enter a proper password. \nThe password should not be with less than 8 characters or more than 128.')
    generatePassword()
  }

// Asking if the user want numbers on their password
  var numericCharacters = confirm('Do You Want Numbers?')
  if (numericCharacters){
    validNumber.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  } 

// Asking if the user want special characters on their password 
  var specialCharaters = confirm('Do you want especial Characters?')
  if (specialCharaters){
    validNumber.push('@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.');
  }

// Asking if the user want upper cased characters on their password 
  var upperCasedCharacters = confirm('Do You Want Upper Cased Characters?')
  if (upperCasedCharacters){
    validNumber.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  }

// Asking if the user want lower cased characters on their password 
  var lowerCasedCharacters = confirm('Do You Want Lower Cased Characters?')
  if (lowerCasedCharacters){
    validNumber.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
  }

// If the user do not want: numbers, special characters, upper cased characters or lower cased characters, then repeat the function 
  if(!numericCharacters&&!specialCharaters&&!upperCasedCharacters&&!lowerCasedCharacters){
    alert('You must choose at least one option')
    return generatePassword()
  }

//Generating random values ​​that are within the array of valid numbers. The password length will be the same as what the user requested
  var password = '';

  for(var i = 0; i < passwordLength; i++){

    finalPassword = finalPassword + validNumber[Math.floor(Math.random() * validNumber.length)];
    // var random = validNumber.charAt(Math.random() * validNumber.length);
    // finalPassword.push(random)
  }
  return finalPassword
}

// checkout .charAt method (validNumber.charAt)
console.log(validNumber)
console.log(finalPassword)
