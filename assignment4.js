// ==========================================
// JAVASCRIPT PRACTICE TASKS
// Name: Prakash
// ==========================================


// ------------------------------------------
// Task 1 - For Loop
// ------------------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ------------------------------------------
// Task 2 - Reverse Number
// ------------------------------------------

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ------------------------------------------
// Task 3 - Even Numbers
// ------------------------------------------

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// ------------------------------------------
// Task 4 - Odd Numbers
// ------------------------------------------

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// ------------------------------------------
// Task 5 - Multiplication Table
// ------------------------------------------

let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// ------------------------------------------
// Task 6 - Countdown using While
// ------------------------------------------

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// ------------------------------------------
// Task 7 - Sum of Numbers
// ------------------------------------------

let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log("Sum:", sum);


// ------------------------------------------
// Task 8 - Do While
// ------------------------------------------

let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 5);


// ------------------------------------------
// Task 9 - Do While Understanding
// ------------------------------------------

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

// Output: 10
// do...while runs at least one time before checking the condition.


// ------------------------------------------
// Task 10 - String Characters
// ------------------------------------------

let name = "javascript";

for (let char of name) {
    console.log(char);
}


// ------------------------------------------
// Task 11 - Array Values
// ------------------------------------------

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}


// ------------------------------------------
// Task 12 - Student Names
// ------------------------------------------

let students = ["Arun", "Priya", "Naveen", "Karthik", "Divya"];

for (let student of students) {
    console.log("Student:", student);
}


// ------------------------------------------
// Task 13 - Employee Object
// ------------------------------------------

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}


// ------------------------------------------
// Task 14 - Product Object
// ------------------------------------------

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}


// ------------------------------------------
// Task 15 - Simple Function
// ------------------------------------------

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


// ------------------------------------------
// Task 16 - Function With Parameter
// ------------------------------------------

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");


// ------------------------------------------
// Task 17 - Multiple Parameters
// ------------------------------------------

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Arun", 22, "IT");
student("Priya", 23, "HR");
student("Naveen", 24, "ECE");


// ------------------------------------------
// Task 18 - Addition Function
// ------------------------------------------

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log("Result:", result);


// ------------------------------------------
// Task 19 - Salary
// ------------------------------------------

function salary(amount) {
    return amount;
}

let mySalary = salary(40000);
console.log("Salary:", mySalary);


// ------------------------------------------
// Task 20 - Bonus Calculator
// ------------------------------------------

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);
console.log("Total Salary:", totalSalary);


// ------------------------------------------
// Task 21 - Default Parameter
// ------------------------------------------

function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");

// Output:
// Name: Arun
// Role: Developer
// Name: Priya
// Role: Designer


// ------------------------------------------
// Task 22 - Named Function
// ------------------------------------------

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));


// ------------------------------------------
// Task 23 - Anonymous Function
// ------------------------------------------

let calculate = function(a, b) {
    return a + b;
};

console.log("Addition:", calculate(10, 20));


// ------------------------------------------
// Task 24 - Arrow Function
// ------------------------------------------

let multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));


// ------------------------------------------
// Task 25 - Scope
// ------------------------------------------

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

    // b and c cannot be accessed here
    // because let and const have block scope.
}

test();

// Output:
// 10
// 20
// 30
// 10


// ------------------------------------------
// Task 26 - Hoisting with var
// ------------------------------------------

console.log(hoistA);

var hoistA = 10;

// Output:
// undefined
// var is hoisted but the value is assigned later.


// ------------------------------------------
// Task 27 - Hoisting with let
// ------------------------------------------

// console.log(hoistB);
// let hoistB = 20;

// Output:
// ReferenceError
// let cannot be accessed before declaration.


// ------------------------------------------
// Task 28 - Hoisting with const
// ------------------------------------------

// console.log(hoistC);
// const hoistC = 30;

// Output:
// ReferenceError
// const cannot be accessed before declaration.


// ------------------------------------------
// Task 29 - IIFE
// ------------------------------------------

(function() {
    console.log("Welcome to JavaScript");
})();


(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);


// ------------------------------------------
// Task 30 - Callback / Higher Order Function
// ------------------------------------------

function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);

// welcomeMessage is the callback function.
// execute is the higher-order function.


// ------------------------------------------
// Task 31 - Generator Function
// ------------------------------------------

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackResult = cashback();

for (let value of cashbackResult) {
    console.log(value);
}


// ==========================================
// Task 32 - EMPLOYEE MANAGEMENT SYSTEM
// ==========================================

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Naveen",
        age: 26,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    },
    {
        name: "Karthik",
        age: 27,
        department: "IT",
        role: "Tester",
        salary: 38000
    }
];


// 1. Using for...of
console.log("EMPLOYEE DETAILS");

for (let employee of employees) {
    console.log(employee);
}


// 2. Using for...in
console.log("EMPLOYEE KEY AND VALUES");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key, employee[key]);
    }

    console.log("----------------");
}


// 3. Function to display employee information

function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


// 4. Passing employee information to function

displayEmployee(
    "Prakash",
    23,
    "IT",
    "Developer",
    40000
);


// 5. Return employee salary

function getSalary(employeeSalary) {
    return employeeSalary;
}

let employeeSalary = getSalary(40000);

console.log("Employee Salary:", employeeSalary);


// 6. Condition

if (employeeSalary >= 40000) {
    console.log("Salary is 40000 or above");
} else {
    console.log("Salary is below 40000");
}


// 7. Arrow function

let yearlySalary = (salary) => {
    return salary * 12;
};

console.log("Yearly Salary:", yearlySalary(40000));


// 8. Generator for Employee Benefits

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

console.log("EMPLOYEE BENEFITS");

for (let benefit of employeeBenefits) {
    console.log(benefit);
}


// ==========================================
// END OF JAVASCRIPT PRACTICE TASKS
// Name: Prakash
// ==========================================