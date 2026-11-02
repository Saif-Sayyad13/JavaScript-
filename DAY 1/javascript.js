// console.log("HEllo");
// console.log(123456)
// a=10
// b="11"


// 1. Add Two Numbers
// function add(a, b) { return a + b; }
// console.log(add(4,5));

// // 2. Even or Odd
// function isEven(n) { return n % 2 === 0; }

// // 3. Find Maximum
// function maxOfTwo(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// // 4. Voting Eligibility
// function canVote(age) { return age >= 18; }

// // 5. Print 1 to N
// function printToN(n) {
//   for (let i = 1; i <= n; i++) console.log(i);
// }

// // 6. Factorial
// function factorial(n) {
//   let res = 1;
//   while (n > 1) { res *= n; n--; }
//   return res;
// }

// // 7. Multiplication Table
// function printTable(n) {
//   for (let i = 1; i <= 10; i++) console.log(n * i);
// }

// // 8. Sum of N Numbers
// function sumToN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) sum += i;
//   return sum;
// }
// // 9. Square a Number
// const square = function(n) { return n * n; };

// // 10. Positive, Negative, or Zero
// const checkSign = function(n) {
//   if (n > 0) console.log(1);
//   else if (n < 0) console.log(-1);
//   else console.log(0);
// };

// // 11. Leap Year Check
// const isLeapYear = function(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// };

// // 12. Count Digits
// const countDigits = function(n) {
//   let count = 0;
//   while (n > 0) { count++; n = (n - (n % 10)) / 10; }
//   return count;
// };

// // 13. Sum of Even Numbers
// const sumEvens = function(n) {
//   let sum = 0;
//   for (let i = 2; i <= n; i += 2) sum += i;
//   return sum;
// };

// // 14. Power Calculator
// const power = function(base, exp) {
//   let res = 1;
//   for (let i = 1; i <= exp; i++) res *= base;
//   return res;
// };

// // 15. Prime Number Check
// const isPrime = function(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };
// // 16. Cube a Number
// const cube = n => n * n * n;

// // 17. Find Minimum
// const minOfTwo = (a, b) => (a < b ? a : b);

// // 18. Divisible by 3 and 5
// const isDivisible = n => n % 3 === 0 && n % 5 === 0;

// // 19. Celsius to Fahrenheit
// const toFahrenheit = c => (c * 9/5) + 32;

// // 20. Countdown
// const countdown = n => {
//   for (let i = n; i >= 1; i--) console.log(i);
// };

// // 21. Reverse a Number
// const reverseNum = n => {
//   let rev = 0;
//   while (n > 0) {
//     rev = (rev * 10) + (n % 10);
//     n = (n - (n % 10)) / 10;
//   }
//   return rev;
// };

// // 22. Sum of Digits
// const sumDigits = n => {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = (n - (n % 10)) / 10;
//   }
//   return sum;
// };

// // 23. Simple Calculator
// const calc = (a, b, opCode) => {
//   switch (opCode) {
//     case 1: return a + b;
//     case 2: return a - b;
//     case 3: return a * b;
//     case 4: return a / b;
//   }
// };
// // 24. Basic IIFE
// (function() { console.log(100); })();

// // 25. IIFE Sum/Product
// ((a, b) => console.log(a * b))(10, 20);

// // 26. IIFE Odd Loop
// (function(n) {
//   for (let i = 1; i <= n; i += 2) console.log(i);
// })(10);

// // 27. IIFE Return Value
// const area = ((l, w) => l * w)(5, 4);

// // 28. Default Tax Rate
// function addTax(price, tax = 10) {
//   return price + (price * tax / 100);
// }

// // 29. Default Loop Step
// const stepPrint = (end, step = 2) => {
//   for (let i = 1; i <= end; i += step) console.log(i);
// };

// // 30. Palindrome Number
// function isPalindrome(n) {
//   let temp = n, rev = 0;
//   while (temp > 0) {
//     rev = (rev * 10) + (temp % 10);
//     temp = (temp - (temp % 10)) / 10;
//   }
//   return n === rev;
// }
