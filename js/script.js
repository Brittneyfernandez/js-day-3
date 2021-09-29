// CHALLENGE 1
// Prompt the user for their first name
const firstName = prompt("enter your firstName")
// Store their input to a variable
console.log(firstName.split('').reverse().join(''))
// Reverse your user’s name

// alert the reversed string
alert(firstName.split('').reverse().join(''))

// Challenge 2
// Prompt for a number value (provide a default of 10)
const firstNumber = prompt('firstNumber', 10)
// Prompt for a second number value (provide a default of 10)
const secondNumber = prompt('secondNumber',10)
// Convert the prompted values into integers using parseInt()
const firstInt = parseInt(firstNumber)
const secondInt = parseInt(secondNumber)

// Add the numbers together and alert the user with the result
alert(firstInt + secondInt)




