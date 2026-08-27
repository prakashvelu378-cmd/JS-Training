// 1. What is a variable in JavaScript?
// A variable is a container used to store data or values in a program.


// 2. What are the three keywords used to create variables?
// var, let, and const.


// 3. Write the syntax to create a variable using var.
var variableName = "value";


// 4. Write the syntax to create a variable using let.
let letVariable = "value";


// 5. Write the syntax to create a variable using const.
const constVariable = "value";


// 6. What is declaration?
// Declaration means creating a variable by giving it a name.
let age;


// 7. What is initialization?
// Initialization means assigning a value to a variable for the first time.
let studentAge = 25;


// 8. What is reassignment?
// Reassignment means changing the value of an existing variable.
let currentAge = 25;
currentAge = 30;


// 9. What is redeclaration?
// Redeclaration means declaring the same variable again using the same keyword.
var oldAge = 25;
var oldAge = 30;


// 10. Which keyword allows redeclaration?
// var allows redeclaration.


// 11. Which keyword allows reassignment?
// var and let allow reassignment.


// 12. Which keyword requires initialization when declared?
// const requires initialization when declared.
const fixedAge = 25;


// 13. Identify the declaration and initialization.
let personAge = 25;
// Declaration: let personAge
// Initialization: = 25


// 14. What is the value of a?
var a = 100;
console.log(a);


// 15. Change the value of this variable to 200.
let number = 100;
number = 200;
console.log(number);


// 16. What will be the output?
var firstNumber = 10;
console.log(firstNumber);
// Output: 10


// 17. What will be the output?
var secondNumber = 10;
secondNumber = 20;
console.log(secondNumber);
// Output: 20


// 18. What will be the output?
var thirdNumber = 10;
var thirdNumber = 30;
console.log(thirdNumber);
// Output: 30


// 19. Write a var variable named name with the value "John".
var name = "John";
console.log(name);


// 20. Create a var variable named price with the value 500.
var price = 500;
console.log(price);


// 21. Reassign price from 500 to 1000.
price = 1000;
console.log(price);


// 22. What will be the output?
var x = 50;
x = 100;
console.log(x);
// Output: 100


// 23. Can a var variable be reassigned?
// Yes, a var variable can be reassigned.


// 24. Can a var variable be redeclared?
// Yes, a var variable can be redeclared.


// 25. Write an example of var redeclaration.
var userAge = 20;
var userAge = 30;
console.log(userAge);


// LET

// 26. Create a let variable named age with the value 25.
let letAge = 25;
console.log(letAge);


// 27. What will be the output?
let newAge = 20;
newAge = 30;
console.log(newAge);
// Output: 30


// 28. Can a let variable be reassigned?
// Yes, a let variable can be reassigned.


// 29. Can a let variable be redeclared?
// No, a let variable cannot be redeclared in the same scope.


// 30. Find the error:
// let name = "John";
// let name = "David";
// Error: SyntaxError - Identifier has already been declared.


// 31. Create a let variable called city and assign "Chennai".
let city = "Chennai";
console.log(city);


// 32. Change the value of city to "Salem".
city = "Salem";
console.log(city);


// 33. What will be the output?
let cityNumber = 10;
cityNumber = 50;
console.log(cityNumber);
// Output: 50


// 34. Write a let variable called salary with the value 25000.
let salary = 25000;
console.log(salary);


// 35. Reassign salary to 30000.
salary = 30000;
console.log(salary);


// CONST

// 36. Create a const variable called pi with the value 3.14.
const pi = 3.14;
console.log(pi);


// 37. Can a const variable be reassigned?
// No, a const variable cannot be reassigned.


// 38. Can a const variable be redeclared?
// No, a const variable cannot be redeclared in the same scope.


// 39. What is wrong with this code?
// const age;
// age = 25;
// Error: const must be initialized when it is declared.

// Correct example:
const correctAge = 25;
console.log(correctAge);


// 40. What happens here?
// const price = 500;
// price = 1000;
// Error: A const variable cannot be reassigned.


// 41. Create a const variable called country with the value "India".
const country = "India";
console.log(country);


// 42. What will be the output?
const constantNumber = 100;
console.log(constantNumber);
// Output: 100


// 43. Which keyword should you use if the value should not be reassigned?
// Answer: const


// 44. What is the difference between let and const?
// let can be reassigned.
// const cannot be reassigned.
// const must be initialized when declared.

let exampleAge = 25;
exampleAge = 30; // Allowed

const examplePi = 3.14;
// examplePi = 3.15; // Error


// 45. What is the difference between var and const?
// var:
// Can be reassigned
// Can be redeclared
// Initialization is optional
// Function-scoped
//
// const:
// Cannot be reassigned
// Cannot be redeclared in the same scope
// Initialization is required
// Block-scoped


// 46. Write JavaScript code to print Hello World using console.log().
console.log("Hello World");


// 47. Write JavaScript code to print the number 500 using console.log().
console.log(500);


// 48. What is the purpose of console.warn()?
// console.warn() is used to display warning messages in the browser console.
console.warn("This is a warning");


// 49. What is the purpose of console.error()?
// console.error() is used to display error messages in the browser console.
console.error("Something went wrong");


// 50. What is the purpose of each?

// alert()
// Displays a message box to the user.
alert("This is an alert message");


// prompt()
// Displays a box that asks the user to enter a value.
let userInput = prompt("Enter your name");


// confirm()
// Displays a box asking the user to confirm or cancel an action.
let confirmation = confirm("Do you want to continue?");


// document.writeln()
// Writes content directly into the HTML document.
document.writeln("Hello from JavaScript");


// console.log()
// Displays information in the browser console.
console.log("JavaScript assignment completed");

