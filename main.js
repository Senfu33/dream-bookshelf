// Declaring variable with const
const breakpointsTest =  document.querySelector('.breakpoints-test');
console.log(breakpointsTest)
//Declaring variable with let
let welcomeStudents = document.getElementById("welcomeStudents");
console.log(welcomeStudents.innerHTML + "From the Console");
//Changing html with js
setTimeout(function() {welcomeStudents.innerHTML = "Changing text from JS"}, 5000)

