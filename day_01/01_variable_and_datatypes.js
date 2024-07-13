// Activity-1: Variable Declaration
// Task-1
var num = 100;
console.log(num);

// Task-2
let strValue = "Java Script 30 days challenge accepted!!!";
console.log(strValue);

// ********************************************
// Activity-2:  Constant Declaration
// Task-3
const boolValue = true;
console.log(boolValue);

// ********************************************
// Activity-3:  Data Types
// Task-4
var numValue = 100;
console.log(typeof numValue);

let strVal = "Hello Javascript";
console.log(typeof strVal);

const boolVal = false;
console.log(typeof boolVal);

let obj = new Object({
  name: "Ashesh Kumar",
  course: "Javascript",
  duration: 30,
  Faculty_name: "Hitesh Chaudhary",
});

console.log(typeof obj);

const arr = [
  100,
  "Array",
  true,
  ["a", "r", "r", "a", "y"],
  { course: "Javascript", popularity: "65.82%" },
];

console.log(typeof arr);

// ********************************************
// Activity 4: Re-assigning values
// Task-5
let val1 = "Ashesh";
console.log(val1);

val1 = "Ashesh Kumar";
console.log(val1);

// ********************************************
// Activity 5: Understanding const
// Task-6
const constVal = 100;
console.log(constVal);

// constVal = 5000;  // TypeError: Assignment to constant variable.
