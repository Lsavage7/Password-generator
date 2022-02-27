// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


  function randomString(len, an) {
  an = an && an.toLowerCase();
  var str = '';
    i = 0,
    min = an == "a" ? 10 : 0,
    max = an == "n" ? 10 : 62;
  for (; i++ < len;) {
    var r = Math.random() * (max - min) + min << 0
    str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48)
  }


  

console.log("Hey! you clicked the button!")

// prompt the user for password crtiteria
 var txt;
 if (prompt("how many characters would you like the password to contain?"))
 if (confirm("Do i want to include special characters"))
 if (confirm("Do i want to include numbers?"))
 if (confirm("Do you want to include lowercase"))
 if (confirm(" Do you want to include uppercase"))
 
  
 return str

}



// password length between 8 and 128//

// prompt the user to include or not lowercase, uppercase, numeric and/or special characters
// validate the input
// generate password


// display the password on the page










// Write password to the #password input
function writePassword() {
  var password = randomString();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

