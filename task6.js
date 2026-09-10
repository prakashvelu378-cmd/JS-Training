// TASK 1 — Student Result Analyzer

function studentResult(name, department, maths, physics, programming, dataStructures, digitalElectronics) {
    let total = maths + physics + programming + dataStructures + digitalElectronics;
    let average = total / 5;

    let result = average >= 50 ? "Pass" : "Fail";

    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("----- Student Result -----");
    console.log("Name       :", name);
    console.log("Department :", department);
    console.log("Total      :", total);
    console.log("Average    :", average);
    console.log("Result     :", result);
    console.log("Grade      :", grade);
}

studentResult("prakash", "MCA", 90, 85, 78, 92, 88);
studentResult("Sarah", "IT", 40, 55, 60, 45, 50);

// TASK 2 — Employee Salary Calculator

let employee1 = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {
    let basic = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basic * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basic * 0.10;
    }

    let finalSalary = basic + bonus;

    console.log("----- Salary Calculation -----");
    console.log("Name          :", employee.name);
    console.log("Basic Salary  :", basic);
    console.log("Bonus         :", bonus);
    console.log("Final Salary  :", finalSalary);
}

calculateSalary(employee1);


// TASK 3 — Product Filter System

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// products above ₹2000
let above2000 = products.filter((p) => p.price > 2000);
console.log("Products above 2000:", above2000);

// only electronics
let electronics = products.filter((p) => p.category === "electronics");
console.log("Electronics:", electronics);

// first product below ₹1000
let firstBelow1000 = products.find((p) => p.price < 1000);
console.log("First product below 1000:", firstBelow1000);

// total price of all products
let totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total price:", totalPrice);

// any product above 50000
let anyAbove50000 = products.some((p) => p.price > 50000);
console.log("Any product above 50000:", anyAbove50000);

// every product above 500
let everyAbove500 = products.every((p) => p.price > 500);
console.log("Every product above 500:", everyAbove500);


// TASK 4 — Employee Management


let employees4 = [
    { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
    { id: 102, name: "Priya", role: "Backend Developer", salary: 55000 },
    { id: 103, name: "Arun", role: "Designer", salary: 35000 },
    { id: 104, name: "Dinesh", role: "Tester", salary: 42000 },
    { id: 105, name: "Karthi", role: "Manager", salary: 65000 },
    { id: 106, name: "Meena", role: "HR", salary: 38000 }
];

// display all names
let allNames = employees4.map((e) => e.name);
console.log("All employee names:", allNames);

// earning above 40000
let above40000 = employees4.filter((e) => e.salary > 40000);
console.log("Employees earning above 40000:", above40000);

// find employee with id 103
let emp103 = employees4.find((e) => e.id === 103);
console.log("Employee with ID 103:", emp103);

// total salary
let totalSalary4 = employees4.reduce((sum, e) => sum + e.salary, 0);
console.log("Total salary:", totalSalary4);

// highest paid employee
let highestPaid = employees4.reduce((max, e) => (e.salary > max.salary ? e : max));
console.log("Highest paid employee:", highestPaid);

// sort highest to lowest
let sortedHighToLow = [...employees4].sort((a, b) => b.salary - a.salary);
console.log("Sorted (high to low):", sortedHighToLow);

// new array with only names
let onlyNames = employees4.map((e) => e.name);
console.log("Only names array:", onlyNames);


// TASK 5 — Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
    // add item total to each item
    let cartWithTotals = cart.map((item) => ({
        ...item,
        itemTotal: item.price * item.quantity
    }));

    let cartTotal = cartWithTotals.reduce((sum, item) => sum + item.itemTotal, 0);

    let discount = cartTotal > 50000 ? cartTotal * 0.10 : 0;

    let finalAmount = cartTotal - discount;

    console.log("----- Shopping Cart -----");
    console.log("Items with totals:", cartWithTotals);
    console.log("Cart Total   :", cartTotal);
    console.log("Discount     :", discount);
    console.log("Final Amount :", finalAmount);

    return finalAmount;
}

calculateCart(cart);


// TASK 6 — Student Search System

let students6 = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

// all names
let studentNames = students6.map((s) => s.name);
console.log("All student names:", studentNames);

// scored above 80
let above80 = students6.filter((s) => s.mark > 80);
console.log("Students above 80:", above80);

// find Priya
let priya = students6.find((s) => s.name === "Priya");
console.log("Student Priya:", priya);

// average mark
let averageMark = students6.reduce((sum, s) => sum + s.mark, 0) / students6.length;
console.log("Average mark:", averageMark);

// anyone failed (below 50)
let anyoneFailed = students6.some((s) => s.mark < 50);
console.log("Anyone failed:", anyoneFailed);

// everyone above 40
let everyoneAbove40 = students6.every((s) => s.mark > 40);
console.log("Everyone above 40:", everyoneAbove40);

// sort by marks
let sortedStudents = [...students6].sort((a, b) => a.mark - b.mark);
console.log("Sorted by marks:", sortedStudents);


// TASK 7 — Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// numbers x 2
let doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled);

// only even numbers
let evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log("Even numbers:", evenNumbers);

// numbers greater than 15
let greaterThan15 = numbers.filter((n) => n > 15);
console.log("Greater than 15:", greaterThan15);

// first number greater than 20
let firstGreaterThan20 = numbers.find((n) => n > 20);
console.log("First greater than 20:", firstGreaterThan20);

// total of all numbers
let totalNumbers = numbers.reduce((sum, n) => sum + n, 0);
console.log("Total:", totalNumbers);

// any number greater than 40
let anyGreaterThan40 = numbers.some((n) => n > 40);
console.log("Any greater than 40:", anyGreaterThan40);

// every number positive
let everyPositive = numbers.every((n) => n > 0);
console.log("Every positive:", everyPositive);

// sort highest to lowest
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted (high to low):", sortedNumbers);


// TASK 8 — String Analyzer

let sentence = "JavaScript is very powerful";
// (you can replace above line with: let sentence = prompt("Enter a sentence");)

let totalChars = sentence.length;
let upperCase = sentence.toUpperCase();
let lowerCase = sentence.toLowerCase();
let hasJavaScript = sentence.includes("JavaScript");
let firstChar = sentence.slice(0, 1);
let lastChar = sentence.slice(-1);
let wordCount = sentence.split(" ").length;
let replaced = sentence.replace("JavaScript", "Python");
let wordsArray = sentence.split(" ");

console.log("----- String Analyzer -----");
console.log("Total characters :", totalChars);
console.log("Uppercase        :", upperCase);
console.log("Lowercase        :", lowerCase);
console.log("Contains JavaScript:", hasJavaScript);
console.log("First character  :", firstChar);
console.log("Last character   :", lastChar);
console.log("Word count       :", wordCount);
console.log("Replaced text    :", replaced);
console.log("Words array      :", wordsArray);


// FINAL MINI PROJECT — Employee Dashboard

let employees = [
    { id: 101, name: "Arun", department: "IT", salary: 45000, experience: 2 },
    { id: 102, name: "Priya", department: "HR", salary: 50000, experience: 4 },
    { id: 103, name: "Karthi", department: "IT", salary: 65000, experience: 6 }
];

// 1. Employee List
console.log("----- 1. Employee List -----");
console.log(employees);

// 2. Search employee by name
function searchByName(name) {
    return employees.find((e) => e.name === name);
}
console.log("----- 2. Search 'Priya' -----");
console.log(searchByName("Priya"));

// 3. Department Filter
function filterByDepartment(dept) {
    return employees.filter((e) => e.department === dept);
}
console.log("----- 3. IT Department -----");
console.log(filterByDepartment("IT"));

// 4. Salary Filter (> 50000)
let highEarners = employees.filter((e) => e.salary > 50000);
console.log("----- 4. Earning above 50000 -----");
console.log(highEarners);

// 5. Total company salary
let totalCompanySalary = employees.reduce((sum, e) => sum + e.salary, 0);
console.log("----- 5. Total Company Salary -----");
console.log(totalCompanySalary);

// 6. Highest paid employee
let highestPaidEmp = employees.reduce((max, e) => (e.salary > max.salary ? e : max));
console.log("----- 6. Highest Paid Employee -----");
console.log(highestPaidEmp);

// 7. Experience > 3 years
let experiencedEmployees = employees.filter((e) => e.experience > 3);
console.log("----- 7. More than 3 years experience -----");
console.log(experiencedEmployees);

// 8. Sorting
let lowToHigh = [...employees].sort((a, b) => a.salary - b.salary);
let highToLow = [...employees].sort((a, b) => b.salary - a.salary);
console.log("----- 8. Sorted Low -> High -----");
console.log(lowToHigh);
console.log("----- 8. Sorted High -> Low -----");
console.log(highToLow);

// 9. Statistics
let totalEmployees = employees.length;
let averageSalary = totalCompanySalary / totalEmployees;

console.log("----- 9. Statistics -----");
console.log("Total Employees :", totalEmployees);
console.log("Total Salary    : ₹" + totalCompanySalary);
console.log("Highest Salary  : ₹" + highestPaidEmp.salary);
console.log("Average Salary  : ₹" + averageSalary.toFixed(2));
