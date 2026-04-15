// Q1: undefined Variable
let myData;

console.log("Initial value:", myData); 

myData = 42;

console.log("New value:", myData);


// Q2: Increment

let num = 5;

num++
console.log(num)

++num
console.log(num)

// Q3: Object Update 

const mySelf={
    name:"Thanoyan",
    age:19,

}

mySelf.age=20;

console.log(mySelf.age)

mySelf.city="Kilinochchi";
console.log(mySelf.city);

console.log(mySelf)


// Q4: Comparison
let a =10;
let b = "10";

console.log(a == b); 

console.log(a === b);


// Q5: Number Addition 

let firstNum = 25;
let secondNum = 5;

let sum = firstNum + secondNum;

console.log(sum);


// Q6: Array Update 

let items = ["pen", "book"];

items.push("bag");

let indexToRemove = items.indexOf("book");
if (indexToRemove !== -1) {
    items.splice(indexToRemove, 1);
}

console.log(items);


// Q7: Boolean Value
let boolean = false;
console.log("Initial state:", boolean);

boolean = true;

console.log("Updated state:", boolean);


// Q8: Arithmetic Order
var num1=20;
var num2=5;
var num3=2;

var numValue=(num1+num2*num3);

console.log(numValue);


// Q9: Null Value
var x=null;
var x=15;
var x="This is string";

console.log(x);


// Q10: Nested Data
const project = {
    name:"Tharun",
    subjects: ["Maths","science","ICT"],
 
}
project.subjects.push("History");
let subject = project.subjects[1];

console.log(project)
console.log(subject)


// Q11: Logical Operators
let A = true;
let B = false;

console.log(A && B);
console.log(A || B);
console.log(!A);


// Q12: String + Number 
var nUm1 = "25";
var nUm2 = 5;

let sUm= nUm1 + nUm2 ;
console.log(sUm);

var nUm1 = 25;
finalSum = nUm1 + nUm2 ;
console.log(finalSum);


// Q13: Primitive Copy  

let c = 10;
let d = c;

d=50;

console.log(c);
console.log(d);


//  Q14: Pass or Fail  

let marks = 78;

if (marks >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}


// Q15: Object Method 
let greeting = {
    message: "Hello",
    sayHello: function() {
        return this.message;
    }
};


console.log("First call:", greeting.sayHello());

greeting.message = "Hi";

console.log("Second call:", greeting.sayHello());


// Q16: Switch Statement  

let dayNumber = 2;

let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid Day";
}

console.log("Day is:", dayName);

// Q17: Invalid Calculation (NaN)

let result = "hello" * 2;

console.log("Result 1:", result);


let result2 = 100 - "two";
console.log("Result 2:", result2); 


// Q18: Age Check (Ternary)  

let age = 20;

let status = (age >= 18) ? "Adult" : "Minor";


console.log("Status:", status);


// Q19: Nested Condition  

let mark = 82;

let grade;

if (mark >= 75) {
    grade = "A";
} else if (mark >= 50) {
    grade = "B";
} else {
    grade = "C";
}

console.log("Marks:", mark);
console.log("Grade:", grade);


//Q20: If Condition  
let Marks = 45;

let Result;

if (marks >= 50) {
    Result = "Pass";
} else {
    Result = "Fail";
}


console.log("Marks:", Marks);
console.log("Final Result:", Result);


// Q21: Array Method  
let fruits = ["Apple", "Banana"];


fruits.push("Orange"); 

fruits.shift();

console.log(fruits);


// Q22: Object Reference  
let obj1 = { value: 5 };
let obj2 = obj1;

obj2.value = 100;

console.log("obj1.value:", obj1.value);

console.log("obj2.value:", obj2.value);


// Q23: Symbol Values  
let sym1 = Symbol("id");
let sym2 = Symbol("id");


let isEqual = (sym1 === sym2);

console.log(isEqual);

// Q24: BigInt  
let largeNumber = 9007199254740991n;

let reSult = largeNumber + 10n;

console.log("BigInt Output:", reSult); 


// Q25: Nested Array  
let task = [
    ["Red", "Green"], 
    ["Blue", "Yellow"]
];

let firstValue = task[0][1];

let secondValue = task[1][0];


console.log("First accessed value:", firstValue);
console.log("Second accessed value:", secondValue);


// Q26: Logical Condition  
let Age = 22;
let hasID = true;


let canEnter;

if (age >= 18 && hasID === true) {
    canEnter = "Welcome! You may enter.";
} else {
    canEnter = "Access Denied.";
}

console.log(canEnter);

// Q27: Compare Objects  
let user1 = { id: 101 };
let user2 = { id: 101 };

let rslt = (user1 === user2);

console.log("Are the objects equal?", rslt);

// Q28: Temperature Check  
let temperature = 32;

let weatherStatus;

if (temperature > 30) {
    weatherStatus = "It is a hot day.";
} else {
    weatherStatus = "The weather is pleasant.";
}

console.log("Current Temperature:", temperature);
console.log("Status:", weatherStatus);


// Q29: Array Reference  
let colors = ["Red", "Green"];

let sharedColors = colors;

sharedColors.push("Blue");

console.log("Original Array (colors):", colors);
console.log("Copied Array (sharedColors):", sharedColors);

// Q30: String Formatting 
let rawName = "  kumar  ";

let trimmedName = rawName.trim();

let finalName = trimmedName.toUpperCase();

console.log(finalName);

// The End...