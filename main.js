// Declaring variable with const
const breakpointTest = document.querySelector('.breakpoints-test');
console.log(breakpointTest)

// Declaring variable with let
let welcomeStudents = document.getElementById('welcomeStudents');
console.log(welcomeStudents.innerHTML + "From the Console")

//Changing html with js
setTimeout(function() {welcomeStudents.innerHTML = "Changing text from js"}, 5000)
