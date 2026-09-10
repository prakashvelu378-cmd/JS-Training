// Task 1
// Create three variables using var, let and const.
// var - student name
// let - student age
// const - college name

var studentName = "Prakash P";
let studentAge = 22;
const collegeName = "Axxess Technologies";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

// Change the var value
studentName = "Prakash";
console.log(studentName);

// Change the let value
studentAge = 23;
console.log(studentAge);

// Try changing const
// collegeName = "ABC College";
// Error because const value cannot be changed.

// Try redeclaring var
var studentName = "Prakash P";
console.log(studentName);

// Try redeclaring let
// let studentAge = 25;
// Error because let cannot be redeclared.



// Task 2
// Get Name, Age and City using prompt()
// and print them in the console.

let name = prompt("Enter your name");
let age = prompt("Enter your age");
let city = prompt("Enter your city");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);



// Task 3
// Get the user's name and display Welcome message using alert().

let welcomeName = prompt("Enter your name");

alert("Welcome " + welcomeName + "!");



// Task 4
// Ask the user for birth year and calculate age.

let birthYear = prompt("Enter your birth year");
let currentYear = 2026;

let calculatedAge = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);



// Task 5
// Create different data types and use typeof.

let text = "Hello";
let number = 100;
let decimal = 25.5;
let value1 = true;
let value2 = false;
let value3;
let value4 = null;

console.log("Hello:", typeof text);
console.log("100:", typeof number);
console.log("25.5:", typeof decimal);
console.log("true:", typeof value1);
console.log("false:", typeof value2);
console.log("undefined:", typeof value3);
console.log("null:", typeof value4);



// Task 6
// Create a student object with name, age, city,
// qualification and isStudent.

let student = {
    name: "Prakash P",
    age: 22,
    city: "Trivandrum",
    qualification: "Software Developer",
    isStudent: true
};

console.log("Complete Object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Qualification:", student.qualification);
console.log("Is Student:", student.isStudent);



// Task 7
// Create an array containing 6 fruits.

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Fruits:", fruits.length);



// Task 8
// Create two numbers and perform arithmetic operations.

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);



// Task 9
// Calculate the total price of Shirt, Pant and Shoes.

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt + pant + shoes;

console.log("Total:", totalPrice);



// Task 10
// Calculate total and average marks.

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);



// Task 11
// Predict the output of post increment.

let a1 = 10;

let b1 = a1++;

console.log(a1);
console.log(b1);

// Answer:
// a1 = 11
// b1 = 10



// Task 12
// Predict the output of pre increment.

let a2 = 10;

let b2 = ++a2;

console.log(a2);
console.log(b2);

// Answer:
// a2 = 11
// b2 = 11



// Task 13
// Predict the output of post decrement.

let a3 = 20;

let b3 = a3--;

console.log(a3);
console.log(b3);

// Answer:
// a3 = 19
// b3 = 20



// Task 14
// Predict the output of pre decrement.

let a4 = 20;

let b4 = --a4;

console.log(a4);
console.log(b4);

// Answer:
// a4 = 19
// b4 = 19



// Task 15
// Find the final values.

let x = 5;

let y = x++;

let z = ++x;

let w = y--;

console.log(x);
console.log(y);
console.log(z);
console.log(w);

// Answer:
// x = 7
// y = 5
// z = 7
// w = 6



// Task 16
// Perform assignment operators.

let num1 = 10;

num1 += 5;
console.log("+= :", num1);

let num2 = 10;

num2 -= 5;
console.log("-= :", num2);

let num3 = 10;

num3 *= 5;
console.log("*= :", num3);

let num4 = 10;

num4 /= 5;
console.log("/= :", num4);

let num5 = 10;

num5 %= 5;
console.log("%= :", num5);

let num6 = 10;

num6 **= 2;
console.log("**= :", num6);



// Task 17
// Create a mini student profile.

let profileName = "Prakash P";
let profileAge = 22;
let profileCity = "Trivandrum";
let profileCollege = "Abcd Technologies";

let subjects = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Database"
];

let studentProfile = {
    name: profileName,
    age: profileAge,
    city: profileCity,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", profileName);
console.log("Student Age:", profileAge);
console.log("City:", profileCity);
console.log("College:", profileCollege);
console.log("First Subject:", subjects[0]);
console.log("Last Subject:", subjects[subjects.length - 1]);
console.log("Total Subjects:", subjects.length);
console.log("Complete Object:", studentProfile);



// Final Challenge
// Get two numbers from the user and perform
// Addition, Subtraction, Multiplication, Division,
// Modulus and Power.

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Modulus:", firstNumber % secondNumber);
console.log("Power:", firstNumber ** secondNumber);
