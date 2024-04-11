// 1 Hello Variable
let greeting = "Hello, World!";
console.log(greeting);

// 2 Basic Math
let num1 = 10,
  num2 = 5;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// 3 Swapping Values
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log("a:", a, "b:", b);

// 4 Type Annotation (TypeScript)
let message: string;
message = "Hello, TypeScript!"; // message = 123; Error
console.log(message);

// 5  Modulus Operator
let num3 = 10,
  num4 = 3;
console.log("Remainder:", num3 % num4);

// 6 Increment Challenge
let counter = 0;
counter++;
console.log("Incremented value :", counter);

// 7 Logical Gates
let x = true,
  y = false,
  z = true;
console.log("AND Gate:", x && y);
console.log("OR Gate:", x || z);
console.log("NOT Gate (a):", !x);

// 8 Compound Assignment
let num = 10;
num += 5;
console.log("+=:", num);
num -= 2;
console.log("-=:", num);
num *= 3;
console.log("*=:", num);
num /= 2;
console.log("/=:", num);

// 9 Even or Odd
let n = 7;
if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 10 Voting Eligibility
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// 11 Grading System
let score = 85;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade:", grade);

// 12 Max of Three
let xx = 5,
  yy = 10,
  zz = 3;
let max = xx;
if (yy > max) {
  max = yy;
}
if (zz > max) {
  max = zz;
}
console.log("Max:", max);

// 13 Leap Year Checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

// 14 Fahrenheit to Celsius Converter
let fahrenheit = 68;
let celsius = (fahrenheit - 32) * (5 / 9);
console.log("Celsius:", celsius.toFixed(2));

// 15 Positive, Negative, or Zero
let number = 0;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative"); 
} else {
  console.log("Zero");
}

// 16 Multiplication Table
let numberr = 7;
for (let i = 1; i <= 10; i++) {
  console.log(numberr + " x " + i + " = " + numberr * i);
}
