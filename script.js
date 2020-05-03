// vars needed 
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Speicals = [ "#", "$", "%", "&"]
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
var Possibilities = []

alert("Lets figure out what kind of password you would like");
var inlcude_lowLetters = confirm("include lower case letters?");
var inlcude_upLetters = confirm("include upper case letters?");
var inlcude_Specials = confirm("include special characters?");
var include_Numbers = confirm( "include numbers?")
var password_length = parseInt(prompt("how many characters between 8-128?"));

// if statements to push to Possibilities
if( inlcude_lowLetters === true){
    Possibilities.push(lowLetters);
  }
  if (inlcude_upLetters=== true){
    Possibilities.push(upLetters);
  }
  if (inlcude_Specials=== true){
    Possibilities.push(Speicals);
  }
  if (include_Numbers=== true){
    Possibilities.push(Numbers);
  }
  
  if(include_Numbers === false && inlcude_Specials === false && inlcude_lowLetters === false && inlcude_upLetters === false){
      alert("no password criteria detected refreshing page")
     window.location.href = 'index.html'
  }
  
//   if statement to redo password length if length is invalid
  if(password_length<8 || password_length>128){
    alert("password length invalid")
    var password_length =parent(prompt("how many characters between 8-128?"));
  }
  // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(document.getElementById(password));
}


function generatePassword(){

  var word= []
  for (var i = 0; i < password_length; i++) {
   var arrayKeys =Object.keys(Possibilities);
   var rn = Math.floor(Math.random()*arrayKeys.length);
   var randomArray = Possibilities[arrayKeys[rn]];
    var randomChar = randomArray[Math.floor(Math.random()*randomArray.length-1)];
   word.push(randomChar);
  }
  return word.toString().replace(/,/g,'');
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

