// ==========================================
// JAVASCRIPT TASKS - BEGINNER LEVEL
// ==========================================


// ==========================================
// Task 1 - Variables
// ==========================================

var name1 = "Prakash";
let age1 = 23;
var city1 = "Coimbatore";
const college1 = "ABC College";

console.log("Name:", name1);
console.log("Age:", age1);
console.log("City:", city1);
console.log("College:", college1);

// Changing var
name1 = "Prakash Kumar";
console.log("Changed name:", name1);

// Changing let
age1 = 24;
console.log("Changed age:", age1);

// const cannot be changed
// college1 = "XYZ College"; // Error

// var can be redeclared
var city1 = "Chennai";
console.log("Redeclared city:", city1);

// let cannot be redeclared
// let age1 = 25; // Error

// const cannot be redeclared
// const college1 = "XYZ College"; // Error


// ==========================================
// Task 2 - Printing Statements
// ==========================================

console.log("This is console.log");

alert("Hello Prakash!");

let answer2 = confirm("Do you like JavaScript?");
console.log("Your answer:", answer2);

let userName2 = prompt("Enter your name:");
console.log("Your name is:", userName2);

document.writeln("Hello Prakash, welcome to JavaScript!");


// ==========================================
// Task 3 - User Details
// ==========================================

let userName3 = prompt("Enter your name");
let userAge3 = prompt("Enter your age");
let userCity3 = prompt("Enter your city");
let qualification3 = prompt("Enter your qualification");

console.log("Name:", userName3);
console.log("Age:", userAge3);
console.log("City:", userCity3);
console.log("Qualification:", qualification3);


// ==========================================
// Task 4 - Find Data Types
// ==========================================

let language4 = "JavaScript";
let number4 = 100;
let decimal4 = 99.5;
let valueTrue4 = true;
let valueFalse4 = false;
let valueUndefined4;
let valueNull4 = null;

console.log(language4, typeof language4);
console.log(number4, typeof number4);
console.log(decimal4, typeof decimal4);
console.log(valueTrue4, typeof valueTrue4);
console.log(valueFalse4, typeof valueFalse4);
console.log(valueUndefined4, typeof valueUndefined4);
console.log(valueNull4, typeof valueNull4);


// ==========================================
// Task 5 - Student Array
// ==========================================

let students5 = ["Prakash", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students5[0]);
console.log("Second student:", students5[1]);
console.log("Last student:", students5[students5.length - 1]);
console.log("Total students:", students5.length);


// ==========================================
// Task 6 - Employee Object
// ==========================================

let employee6 = {
    name: "Prakash",
    age: 23,
    role: "Software Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["BCA", "MCA"]
};

console.log("Employee name:", employee6.name);
console.log("Age:", employee6.age);
console.log("Role:", employee6.role);
console.log("First skill:", employee6.skills[0]);
console.log(
    "Last qualification:",
    employee6.qualification[employee6.qualification.length - 1]
);
console.log("Working status:", employee6.isWorking);


// ==========================================
// Task 7 - Calculator
// ==========================================

let a7 = 20;
let b7 = 5;

console.log("Addition:", a7 + b7);
console.log("Subtraction:", a7 - b7);
console.log("Multiplication:", a7 * b7);
console.log("Division:", a7 / b7);
console.log("Modulus:", a7 % b7);
console.log("Exponentiation:", a7 ** b7);


// ==========================================
// Task 8 - Shopping Bill
// ==========================================

let shirt8 = 999;
let pant8 = 1499;
let shoes8 = 1999;
let bag8 = 799;

let totalPrice8 = shirt8 + pant8 + shoes8 + bag8;

console.log("Total price:", totalPrice8);


// ==========================================
// Task 9 - Increment and Decrement
// ==========================================

// A
let a9 = 10;
let b9 = a9++;

console.log("A - a:", a9);
console.log("A - b:", b9);

// B
let a9b = 10;
let b9b = ++a9b;

console.log("B - a:", a9b);
console.log("B - b:", b9b);

// C
let a9c = 10;
let b9c = a9c--;

console.log("C - a:", a9c);
console.log("C - b:", b9c);

// D
let a9d = 10;
let b9d = --a9d;

console.log("D - a:", a9d);
console.log("D - b:", b9d);


// ==========================================
// Task 10 - Assignment Operators
// ==========================================

let num10a = 10;
num10a += 5;
console.log("10 += 5:", num10a);

let num10b = 10;
num10b -= 3;
console.log("10 -= 3:", num10b);

let num10c = 10;
num10c *= 2;
console.log("10 *= 2:", num10c);

let num10d = 10;
num10d /= 4;
console.log("10 /= 4:", num10d);

let num10e = 10;
num10e %= 3;
console.log("10 %= 3:", num10e);

let num10f = 10;
num10f **= 2;
console.log("10 **= 2:", num10f);


// ==========================================
// Task 11 - Comparison Operators
// ==========================================

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");


// ==========================================
// Task 12 - AND Operator
// ==========================================

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// ==========================================
// Task 13 - OR Operator
// ==========================================

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// ==========================================
// Task 14 - NOT Operator
// ==========================================

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


// ==========================================
// Task 15 - Combination
// ==========================================

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");


// ==========================================
// Task 16 - Voting
// ==========================================

let votingAge16 = 23;

let votingResult16 = votingAge16 >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log("Prakash:", votingResult16);


// ==========================================
// Task 17 - Password
// ==========================================

let password17 = true;

let loginResult17 = password17
    ? "Login successful"
    : "Wrong password";

console.log("Prakash:", loginResult17);


// ==========================================
// Task 18 - User Introduction
// ==========================================

let introName18 = "Prakash";
let introAge18 = 23;
let introCity18 = "Coimbatore";

// Using +
console.log(
    "My name is " + introName18 +
    ". I am " + introAge18 +
    " years old. I live in " + introCity18 + "."
);

// Using template literal
console.log(
    `My name is ${introName18}. I am ${introAge18} years old. I live in ${introCity18}.`
);


// ==========================================
// Task 19 - String Conversion
// ==========================================

let string19a = String(100);
let string19b = String(true);
let string19c = String(undefined);
let string19d = String(null);
let string19e = String([1, 2]);

console.log(string19a, typeof string19a);
console.log(string19b, typeof string19b);
console.log(string19c, typeof string19c);
console.log(string19d, typeof string19d);
console.log(string19e, typeof string19e);


// ==========================================
// Task 20 - Number Conversion
// ==========================================

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// ==========================================
// Task 21 - Boolean Conversion
// ==========================================

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


// ==========================================
// Task 22 - Voting Eligibility
// ==========================================

let ageForVote22 = Number(prompt("Prakash, enter your age"));

if (ageForVote22 >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// ==========================================
// Task 23 - Positive or Negative
// ==========================================

let checkNumber23 = Number(prompt("Prakash, enter a number"));

if (checkNumber23 > 0) {
    console.log("Positive");
} else if (checkNumber23 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// ==========================================
// Task 24 - Grade System
// ==========================================

let marks24 = Number(prompt("Prakash, enter your marks"));

if (marks24 >= 90 && marks24 <= 100) {
    console.log("A Grade");
} else if (marks24 >= 80 && marks24 < 90) {
    console.log("B Grade");
} else if (marks24 >= 70 && marks24 < 80) {
    console.log("C Grade");
} else if (marks24 >= 60 && marks24 < 70) {
    console.log("D Grade");
} else if (marks24 >= 0 && marks24 < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}


// ==========================================
// Task 25 - Job Eligibility
// ==========================================

let jobAge25 = Number(prompt("Enter your age"));
let jobHeight25 = Number(prompt("Enter your height"));
let jobWeight25 = Number(prompt("Enter your weight"));

if (jobAge25 >= 18) {

    if (jobHeight25 >= 160) {

        if (jobWeight25 >= 60) {
            console.log("Congratulations Prakash! You are selected");
        } else {
            console.log("You are not selected because your weight is below 60");
        }

    } else {
        console.log("You are not selected because your height is below 160");
    }

} else {
    console.log("You are not selected because your age is below 18");
}


// ==========================================
// Task 26 - Traffic Light
// ==========================================

let color26 = prompt("Prakash, enter traffic light color");

switch (color26) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// ==========================================
// Task 27 - Day
// ==========================================

let day27 = 1;

switch (day27) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// ==========================================
// Task 28 - Student Result System
// ==========================================

let studentName28 = "Prakash";
let studentAge28 = 23;
let studentCity28 = "Coimbatore";

let tamil28 = 85;
let english28 = 80;
let maths28 = 90;

let total28 = tamil28 + english28 + maths28;
let average28 = total28 / 3;

let grade28;

if (average28 >= 90) {
    grade28 = "A";
} else if (average28 >= 80) {
    grade28 = "B";
} else if (average28 >= 70) {
    grade28 = "C";
} else if (average28 >= 60) {
    grade28 = "D";
} else {
    grade28 = "Fail";
}

let votingStatus28;

if (studentAge28 >= 18) {
    votingStatus28 = "Eligible";
} else {
    votingStatus28 = "Not Eligible";
}

console.log(`
Name: ${studentName28}
Age: ${studentAge28}
City: ${studentCity28}
Tamil: ${tamil28}
English: ${english28}
Maths: ${maths28}
Total: ${total28}
Average: ${average28.toFixed(2)}
Grade: ${grade28}
Voting: ${votingStatus28}
`);

