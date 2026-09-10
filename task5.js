// ============ Variables & Data Types ============

// Q1: Difference between var, let, const
// var   -> function scope, can redeclare & update
// let   -> block scope, can update but not redeclare
// const -> block scope, cannot update or redeclare

// Q2: Re-declare a variable
var a = 10;
var a = 20; // allowed
console.log("Q2 var:", a);

let b = 10;
// let b = 20; // Error: already declared
b = 20; // update allowed
console.log("Q2 let:", b);

const c = 10;
// c = 20;      // Error: cannot update
// const c = 20 // Error: cannot redeclare
console.log("Q2 const:", c);


// Q3: Output
var x = 5;
let y = 10;
const z = 15;
x = 20;
y = 25;
// z = 30; // TypeError: Assignment to constant variable.
console.log("Q3:", x, y, z);


// Q4: declaring vs initializing
let a4; // declaring
a4 = 10; // initializing
console.log("Q4:", a4);


// Q5: Output
let a5;
console.log("Q5:", a5); // undefined


// Q6: Hoisting example
console.log("Q6:", a6); // undefined (not an error)
var a6 = "hi";


// Q7: null vs undefined
// undefined -> JS automatically assigns when no value given
// null      -> developer manually assigns to represent "empty"
let a7;          // undefined
let b7 = null;   // null
console.log("Q7:", a7, b7);


// Q8: Output
console.log("Q8:", typeof null);       // object
console.log("Q8:", typeof undefined);  // undefined
console.log("Q8:", typeof []);         // object
console.log("Q8:", typeof {});         // object


// ============ Operators ============

// Q9: == vs ===
console.log("Q9:", 5 == "5");   // true  (loose - value only)
console.log("Q9:", 5 === "5");  // false (strict - value + type)


// Q10: ++i vs i++
let i1 = 5;
console.log("Q10 pre:", ++i1);  // 6 (increment first)

let i2 = 5;
console.log("Q10 post:", i2++); // 5 (use first, then increment)
console.log("Q10 post after:", i2); // 6


// Q11: Output
let x11 = 10;
let y11 = "5";
console.log("Q11:", x11 + y11); // "105" (string concat)
console.log("Q11:", x11 - y11); // 5
console.log("Q11:", x11 * y11); // 50
console.log("Q11:", x11 / y11); // 2


// Q12: Logical operators
console.log("Q12 AND:", true && false);  // false
console.log("Q12 OR:", true || false);   // true
console.log("Q12 NOT:", !true);          // false


// Q13: Output
console.log("Q13:", 5 > 3 && 10 > 5);  // true
console.log("Q13:", 5 > 10 || 10 > 5); // true
console.log("Q13:", !(5 > 3));         // false


// Q14: Ternary operator
let pwd = true;
pwd ? console.log("Q14: access allowed") : console.log("Q14: access denied");


// ============ Type Casting ============

// Q15: implicit vs explicit
console.log("Q15 implicit:", "5" + 1);     // "51"
console.log("Q15 explicit:", Number("5") + 1); // 6


// Q16: Output
console.log("Q16:", Number("123"));  // 123
console.log("Q16:", Number("hello")); // NaN
console.log("Q16:", Number(true));   // 1
console.log("Q16:", Number(false));  // 0
console.log("Q16:", Boolean(0));     // false
console.log("Q16:", Boolean("hello")); // true


// Q17: NaN
console.log("Q17:", Number("hello")); // NaN - Not a Number


// ============ Conditional Statements ============

// Q18: if-else vs switch
// if-else -> good for ranges/complex conditions
// switch  -> good for comparing one variable to many exact values


// Q19: Output
let age19 = 20;
if (age19 >= 18) {
    console.log("Q19: Adult");
} else {
    console.log("Q19: Minor");
}


// Q20: Nested if
let age20 = 20;
let hasID = true;
if (age20 >= 18) {
    if (hasID) {
        console.log("Q20: Allowed");
    } else {
        console.log("Q20: ID required");
    }
}


// Q21: Even or odd using ternary
let num21 = 7;
num21 % 2 === 0 ? console.log("Q21: Even") : console.log("Q21: Odd");


// ============ Loops ============

// Q22: while vs do-while
// while     -> checks condition first, may run 0 times
// do-while  -> runs body first, then checks condition, runs at least once


// Q23: Output
for (let i = 1; i <= 5; i++) {
    console.log("Q23:", i);
}


// Q24: for-of vs for-in
let arr24 = ["a", "b", "c"];
for (let val of arr24) {
    console.log("Q24 for-of:", val);
}

let obj24 = { x: 1, y: 2 };
for (let key in obj24) {
    console.log("Q24 for-in:", key, obj24[key]);
}


// Q25: sum of 1 to 100
let sum25 = 0;
for (let i = 1; i <= 100; i++) {
    sum25 += i;
}
console.log("Q25:", sum25); // 5050


// ============ Arrays ============

// Q26: slice vs splice
// slice(start, end)         -> copies part of array, doesn't modify original
// splice(start, count, ...) -> modifies original array (add/remove items)
let sliceArr = [1, 2, 3, 4, 5];
console.log("Q26 slice:", sliceArr.slice(1, 3)); // [2, 3], original unchanged
console.log("Q26 after slice:", sliceArr);

let spliceArr = [1, 2, 3, 4, 5];
spliceArr.splice(1, 2, "x", "y"); // removes 2 items from index 1, adds x,y
console.log("Q26 splice:", spliceArr); // original modified


// Q27: Output
let arr27 = [1, 2, 3];
arr27.push(4);     // [1,2,3,4]
arr27.pop();        // [1,2,3]
arr27.unshift(0);  // [0,1,2,3]
arr27.shift();      // [1,2,3]
console.log("Q27:", arr27); // [1, 2, 3]


// ============ Functions ============

// Q28: function declaration vs expression
greetDeclaration(); // works - hoisted
function greetDeclaration() {
    console.log("Q28: Function declaration works before definition");
}

// greetExpression(); // Error - not hoisted
let greetExpression = function () {
    console.log("Q28: Function expression");
};
greetExpression();


// Q29: Arrow function
let add29 = (p, q) => p + q;
console.log("Q29:", add29(2, 3)); // 5


// Q30: Output
function greet30() {
    return "Hello";
}
let message30 = greet30();
console.log("Q30:", message30); // Hello
