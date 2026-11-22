// const accNo = 12345
// accNo = 777
// console.log(accNo);

// const accNo  = 87685;

// let accBal = 10;
// accBal = 20
// let accBal = 10

// a = 10
// a = 20

// let count = 0;
// ++count
// console.log((count += 2)); // 1
// console.log(count--); // 1
// console.log(count); // 0

// let a = 10
// let b = "10"
// console.log(a === b);

// let a = true
// console.log(typeof true); // boolean
// console.log(typeof "true"); // string

// let a = 10;
// let b = 10.1;
// let c = -10.1;
// let d = 12345678901234567n   ;
// let e = 12n   ;
// console.log(d);
// let friends = ["Jyothi", "Apeksha", "Sonam", "Bhakti"]
// let str = `my friends are ${friends.map(friend=>friend)}`
// console.log(str);

// let price = 101
// let str1 = 'Hello'
// let str2 = "Hello"
// let str3 = `the product is ${price > 100 ? "Expensive" : "Cheap"} `
// console.log(str1);
// console.log(str2);
// console.log(str3);

// let accNo;
// console.log(accNo); // undefined

// let accBal = null;
// console.log(accBal);

// let person = {
//     name :  null,
// }

// console.log(10 + true);

// let a = Symbol(10)
// let b = Symbol(10)
// console.log(a==b);

// console.log(Boolean(1));
// console.log(Boolean(2));
// console.log(Boolean(-2));
// console.log(Boolean("a"));
// console.log(Boolean(" "));
// console.log(Boolean([]));
// console.log(Boolean({}));

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// let isAvailable = false
// price  ? "product available" : "not available"

// let price = 90;

// let str = `the product is ${price > 100 ? "Expensive" : "Affordable"}`;

// let friends = ["Jyothi", "Apeksha", "Sonam", "Bhakti"]
// let str = `My friends are ${friends.map(friend=>friend)}`
// console.log(str);
// My friends are Jyothi,Apeksha,Sonam,Bhakti

// console.log("10"+10); // 1010 concatination because of "+"
// console.log("10" - 10); // 0 reason - "10" is typecastable to number
// console.log("a" - "b"); // NaN reason - "a" is non numeric and cannot be typecastable to number

// console.log("hello" == "hello"); // true
// console.log(Symbol("hello") == Symbol("hello")); // false

// let func = ()=>{

// }

// let add = (a, b)=>{
//     console.log(a+b);
// }
// add(10,20)

// let sayHello = (str) => {
//   for (let i = 0; i < 10; i++) {
//     console.log(str);
//   }
// };
// sayHello("Hello");

//   for (let i = 0; i < 10; i++) {
//     console.log(str);
//   }
// Array(10).fill(2).map((val, i)=>{console.log(`${val}*${i+1} = ${val*(i+1)}`)})
// let n = 2;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} * ${i} = ${n * i}`);
// }
// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// if(){}
// }

// alert("alert1")

// let showPopUp = ()=>{
//   alert("alert2")
// }

// let span = document.querySelector('span')
// let div = document.querySelector('div')
// span.onclick = ()=>{
//   div.style.display = "block"
// }

// let func1 = ()=>{} // arrow function
// function func2() {} // regular function / function declaration
// let func3 = ()=>{}        // function as a expression
// let func4 = function(){} // function as a expression
// ()=>{}     // annonymous function
// function () {}     // annonymous function
// console.log();

// ((a)=>{
//   console.log(a);
// })(10);

// (function (){})()

// Basic calculator
// Create four functions for addition, subtraction, multiplication, and division. Each function should accept two numbers and return the result.
// Concepts: regular functions, parameters, return

// function add (n1, n2){
// //  return n1+n2
// }
// // console.log(add(10, 20));

// let sum = add(10, 20)
// console.log(sum);

// function sub (n1, n2){}
// function mul (n1, n2){}
// function div (n1, n2){}

// Temperature converter
// Write a function that converts Celsius to Fahrenheit and another that converts Fahrenheit to Celsius.
// Formula: F=(C×9/5)+32
// Concepts: function expressions, arrow functions, return values

// let celToFahr = (temp) => {
//   let newtemp = (temp * 9) / 5 + 32;
//   return newtemp;
// };
// let fahrToCel = (temp) => {
//   let newtemp = ((temp - 32) * 5) / 9;
//   return newtemp;
// };
// console.log(celToFahr(38));
// console.log(fahrToCel(100.4));
// let btn = document.querySelector("button");
// let isLoggedIn = true;
// let f1 = (login, logout) => {

//   let innerFunc = () => {
//     if (isLoggedIn) {
//       logout();
//     } else {
//       login();
//     }
//   };
//   return innerFunc;
// };
// btn.onclick = f1(
//   () => {
//     alert("logged in successfully");
//   },
//   () => {
//     alert("logged out successfully");
//   }
// );

// let a = 10
// let b = ()=>{}
// console.log(a);

// let f1 = (cb)=>{
//    console.log(cb);

//     cb()
// }
// let f2 = ()=>{console.log("called")}
// f1(f2())

// function vote(age){
//     if (age>=18){
//         console.log('u can vote')
//     }
//     else{
//         console.log('not')
//     }
// }
// function a(func,age){
//     console.log()
// }
// a(vote)

// let greetUser = (name, callback) => {
//   callback(name);
// };
// let sayHello = (name) => {
//   console.log(`Hello ${name}`);
// };
// let sayGoodBye = (name) => {
//   console.log(`Goodbye ${name}`);
// };

// greetUser("Sarthak", sayHello);
// greetUser("Sarthak", sayGoodBye);

// let calculate = (a, b, callback) => {
//   callback(a, b);
// };

// let add = (a, b) => {
//   console.log(`Add of ${a} and ${b} is ${a + b} `);
// };
// let sub = (a, b) => {
//     console.log(`Sub of ${a} and ${b} is ${a - b} `);
// };
// let mul = () => {};
// let div = () => {};

// calculate(10, 20, sub);
// let formatMessage = (message, callback)=>{
//     callback(message)
// }

// let convertUpperCase= (msg)=>{
//     console.log(msg.toUpperCase());
// }
// let convertLowerCase = (msg)=>{
//     console.log(msg.toLowerCase());
// }
// let reverseMsg = (msg)=>{
//     console.log(msg.split(" ").reverse().join(" "));
// }
// let prefixMsg = (msg)=>{
//     console.log(msg.padStart(20, "*"));
// }
// let sufixMsg = (msg)=>{
//     console.log(msg.padEnd(20, "*"));
// }

// formatMessage("All is well", convertUpperCase)
// formatMessage("All is well", convertLowerCase)
// formatMessage("All is well", reverseMsg)
// formatMessage("All is well", prefixMsg)
// formatMessage("All is well", sufixMsg)

// let currentAccBal = 1000;
// let transaction = (type, amt) => {
//   type(amt);
// };
// let deposit = (amt) => {
//   currentAccBal += amt;
//   console.log(currentAccBal);
// };
// let withdraw = (amt) => {
//   currentAccBal -= amt;
//   console.log(currentAccBal);
// };
// let intrest = (percentages) => {
//   currentAccBal = currentAccBal + (currentAccBal * percentages) / 100;
//   console.log(currentAccBal);
// };
// // transaction(deposit, 1000)
// // transaction(withdraw, 1000)
// transaction(intrest, 7);

// create cal;
// return inner func that accept a, b , cb
// inside returned func calculate a + b
// pass the sum to callback
// return callbacks result
// call the outer func first then return func
// pass the callback that multiplies the sum by 2
// let calculate = () => {
//   return (a, b, cb) => {
//     cb(a + b);
//   };
// };
// let innerFunc = calculate();
// innerFunc(10, 20, (sum) => {
//   console.log(sum * 2);
// });

// let a = 10;
// console.log(window);
// alert()
// confirm()
// let username = prompt("Enter username")

// let a = 10;
// console.log(a);
// demo(10);
// function demo(n) {
//   console.log(n * n);
// }
// demo(10);

// let a = 10;
// console.log(a);
// demo(10);
// let demo = function (n) {
//   console.log(n * n);
// }
// demo(10);

// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;
// const c = 30;
// console.log(c);

// let f1 = () => {
//   let a = 10;
//   let f2 = () => {
//     console.log(a);
//   };
//   f2();
// };
// f1();

// let f1 = () => {
//   let a = 10;
//   let b = 20
//   let f2 = () => {
//     console.log(a);
//     console.log(b);
//   };
//   return f2
// };
// let retF2 = f1();
// retF2()

// let func = ()=>{
//   return 10
// }
// let a = func()
// console.log(a);

//! let arr = [10, ()=>{alert()} , 30, "hello", [100, [200, 300, [400]]]]
// console.log(arr.length-1);
// console.log(arr[1]());
// console.log(arr[4][1][2][0]);

// let arr = [10, 20, 30, 40];
// arr.push(100)
// arr.pop()
// arr.unshift(100)
// arr.shift()
// arr.splice(start, count, elements)
// arr.splice(1, 1, 200) //  [10, 200, 30, 40]
// arr.splice(1, 0, 200) //  [10, 200, 20, 30, 40]
// arr.splice(1, 1) //  [10, 30, 40]
// arr.splice(1 ) //  [10]
// arr.splice(1 ) //  [10]
// arr.splice(1, 10); //  [10]
// arr.splice(1, 0, 100, 200, 300); //  [10, 100, 200, 300, 20, 30, 40]
//  arr.splice(0, arr.length, 100 ) // [100]
// console.log(arr);

// let arr = [10, 20, 30, 40];
//! let customForEach = (cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i);
//   }
// };
// customForEach((ele, i) => {
//   console.log(ele * i);
// });

//! arr.forEach((ele, i) => {
//   console.log(ele*2);
// });

// [10, 20, 30, 40].forEach(ele=>console.log(ele*2))
// [10, 20, 30, 40].map(ele=>console.log(ele*2))
// [10, 20, 30, 40].filter(ele=>console.log(ele*2))
// [10, 20, 30, 40].reduce(ele=>console.log(ele*2))
// [10, 20, 30, 40].some(ele=>console.log(ele*2))
// [10, 20, 30, 40].every(ele=>console.log(ele*2))
// [10, 20, 30, 40].sort((a, b)=>console.log(ele*2))
// setTimeout(()=>{},  time)
// setInterval(()=>{},  time)
// ele.addEventLostener("event", ()=>{})
// then(()=>{})
// catch(()=>{})
// finally(()=>{})
// new Promise(()=>{})
// console.log([10, 20, 30, 40].map((val, i)=>val*i));

// let arr = [10, 20, 30, 40];
// let customMap = (cb) => {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     let val = cb(arr[i], i);
//     temp.push(val); //  [0, 20, 60, 120]
//   }
//   return temp
// };
// let newArr = customMap((ele, ind) => {
//   return ele * ind;
// });
// console.log(newArr);

// let arr = [10, 20, 30, 40];
// let customMap = (cb) => {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     let rv = cb(arr[i], i, arr);
//     temp.push(rv); // [20, 40, 60, 80]
//   }
//   return temp
// };
// let newArr = customMap((val, ind, arr) => {
//   console.log( arr);
//   return val * 2;
// });
// console.log(newArr);

// arr.forEach((val, ind, arr) => {
//   console.log(val, ind, arr);
// });

// let arr = [10, 0, 30, 41];
// let customFilter = (cb) => {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     let bool = cb(arr[i], i, arr);
//     if(bool){
//       temp.push(arr[i])
//     }
//   }
//   return temp
// };
// let filteredArr = customFilter((val, ind) => {
//   return "hello";
// });
// console.log(filteredArr);

// let newArr = arr.filter((val, ind, arr)=>{return 0 })
// console.log(newArr); // []

// let arr = [10, 20, 30, 41];
// let customReduce = (cb, initial) => {
//   let acc;
//   if (initial) {
//     acc = initial;
//     for (let i = 0; i < arr.length; i++) {
//       acc = cb(acc, arr[i], i, arr);
//     }
//   } else {
//     acc = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       acc = cb(acc, arr[i], i, arr);
//     }
//   }
//   return acc;
// };
// let singleVal = customReduce((acc, val, ind, arr) => {
//   return (acc += val);
// });
// console.log(singleVal);

// let singleVal = arr.reduce((acc, val, ind, arr) => { return acc+=val;}, 100 );
// console.log(singleVal);

// • Task 1: Print the Square of Each Number
// 	• Given: const nums = [2, 3, 4, 5];
// 	• Task: Use .forEach() to log each number multiplied by itself (num * num) to the console.
// 	• Expected Console Output: 4, 9, 16, 25
// const nums = [2, 3, 4, 5];
// nums.forEach((val, ind, arr) => {
//   console.log(val * val);
// });

// I want task based on Javascript map filter reduce forEach, some, every, sort methods where I just know the basics of JavaScript like basic primitive and non primitive datatypes, functions. I don't know the objects in detail, I just know the push pop shift and unshift and splice method of the array. I don't have knowledge of any string related things, async await, dom, event handling, timers etc.

// let arr=[10,20,30,40]
// arr.forEach((ele, i) => {
//   console.log(ele*i);
// });

// Goal: Find the sum of all numbers in an array.
// • Input: [150, 400, 50, 200, 100]
// • Expected Output: 900
// • Hint: Start your initialValue at 0 and add currentValue to the accumulator on each step.
// let arr = [150, 400, 50, 200, 100];
// let sum = arr.reduce((acc, val) => {
//   let newAcc = acc + val;
//   return newAcc;
// }, 0);
// console.log(sum);

// 1. Function Hoisting: Works completely
// sayHello(); // Output: "Hello!"

// function sayHello() {
//   console.log("Hello!");
// }

// // 2. Variable Hoisting (var): Declaration is hoisted, value is not
// console.log(myName); // Output: undefined (No error!)
// var myName = "Rahul";
// console.log(myName); // Output: "Rahul"

// Task 2: Find the Highest Score
// Goal: Find the largest number in an array without using Math.max().
// • Input: [45, 88, 12, 99, 64, 31]
// • Expected Output: 99
// • Hint: Start with the first number as your initial value (or 0), and use an if statement to return whichever is bigger: accumulator or currentValue.

//   max,val
// let scores = [45, 88, 12, 99, 64, 31]
// let biggestNo = scores.reduce((max , val)=>{
//     console.log(max); // 45, 88, 88 , 99 , 99, 99
//     if(val > max){
//         return val
//     }
//     return max
// })
// console.log(biggestNo);

// Task 3: Filter Even Numbers (Using push)
// Goal: Create a new array containing only the even numbers from the original array.
// • Input: [11, 24, 37, 42, 50, 63, 88]
// • Expected Output: [24, 42, 50, 88]
// • Hint: Set your initialValue to an empty array []. If currentValue % 2 === 0, use accumulator.push(currentValue) and then return accumulator.

// let nums = [11, 24, 37, 42, 50, 63, 88];
// let evenNo = nums.reduce((arr, currentValue) => {
//   if (currentValue % 2 == 0) {
//     arr.push(currentValue);
//   }
//   return arr
// }, []);
// console.log(evenNo);

// let nums = [-10, 5, 0, 22, -3, 18, 9]
// let count = nums.reduce((c,n)=>{
//     if(n > 0 ){
//         c++
//     }
//     return c
// }, 0)
// console.log(count);

// let arr = [10, 20, 30, 40, 50]
// let revArr = arr.reduce((newArr , ele)=>{
//     newArr.unshift(ele)
//     return newArr
// }, [])
// console.log(revArr);

// let arr = [40, 30, 10, 50, 20, 100, 1000]
// console.log(arr.sort((a,b)=>b-a));

// • Task A: Given const scores = [12, 45, 7, 89, 23];, print each score to the console along with its index (e.g., Index 0: 12).
// • Task B: Create an empty array const doubled = [];. Use forEach on [2, 4, 6, 8] to push the doubled values into doubled.

// const scores = [12, 45, 7, 89, 23];

// I want task based on Javascript map filter reduce forEach, some, every, sort methods where I just know the basics of JavaScript like basic primitive and non primitive datatypes, functions. I don't know the objects in detail, I just know the push pop shift and unshift and splice method of the array. I don't have knowledge of any string related things, async await, dom, event handling, timers etc. include tasks based on method chaining
// 1. Discounted Total:
// Given const cart = [120, 450, 800, 50, 300];
// 	• Filter out items costing less than 200.
// 	• Map the remaining items to apply a 10% discount (price * 0.9).
// 	• Reduce them to find the final bill total.
// const cart = [120, 450, 800, 50, 300];
// console.log(cart.filter((price)=>price > 200).map((p)=>p*0.9).reduce((acc, val)=>acc+=val));

// let arr = [-10, -2, 0, 2, 10]

// let x = arr.map((el,index)=> {
//     return el*index
// }).filter((el)=>el%2===0).find((el)=>el>0)

// console.log(x)

// let arr = [10, 20, 30, 40, 10, 40];
// let arr = [100, [10, 20], [[200], 300]];
// console.log(arr.flat(2));
// let temp = [];
// let flatten = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])){
//         flatten(arr[i])
//     }else{
//         temp.push(arr[i])
//     }
//   }
// };
// flatten(arr);
// console.log(temp);
// console.log(arr.at(0));
// console.log(arr[0]);
// console.log(arr.concat([100, 200]));
// console.log(arr.indexOf(10)); // 0
// console.log(arr.lastIndexOf(10)); // 4
// console.log(arr.flat(1));
// find, findLast , flat

// let arr = [10, 20, 30, 40, 50, 20, 20, 40, 20, 40];
// console.log(arr.indexOf(20));
// if(arr.length%2!=0){
//   console.log(arr.at(Math.floor(arr.length/2)));
// }

// 0   1   2   3   4   5   6   7   8   9
// let arr = [10, 20, 30, 40, 50, 20, 20, 40, 20, 40];
// console.log(arr.includes(10));
// console.log(arr.reverse());
// console.log(arr.slice());
// ! default parameters
// let intro = (name, country = "India") => {
//   console.log(name, country);
// };
// intro("Aman", "UK");

//! how to reverse a string
let str = "Ramayana";
// let newStr = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== "a") {
//     newStr += str[i];
//   }
// }
// console.log(newStr);
// let newStr = ""
// for (let i = str.length-1; i >= 0 ; i--) {
//   newStr+=str[i]
// }
// console.log(newStr);
//! OR
// let arr = str.split("");
// console.log(arr); //['R', 'a', 'm', 'a', 'y', 'a', 'n', 'a']
// let newArr = arr.reverse();
// console.log(newArr); // ['a', 'n', 'a', 'y', 'a', 'm', 'a', 'R']
// let newStr = newArr.join("");
// console.log(newStr); // anayamaR
//! or
// console.log(str.split("").reverse().join("")); // anayamaR

// let str = "8757"
// console.log(str[0]);
// console.log(str.at(0));
// console.log(str.charAt(0));
// console.log(str.charCodeAt(1));
// console.log(str.concat());
// console.log(str + "");
// console.log(str.endsWith("ana"));
// console.log(str.includes("maya"));
// console.log(str.indexOf("R"));
// console.log(str.lastIndexOf("a"));
// console.log(str.padEnd(10, "*"));
// console.log(str.padStart(10, "*"));
// console.log(str.repeat(2));
// console.log(str.startsWith("R"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());




// I want 50 descriptive task with valid inputs with it based on Javascript strings and its methods like at(), charAt(), charCodeAt(), concat(), endsWith(), includes(), indexOf(), lastIndexOf(), padEnd(), padStart(), repeat(), startsWith(), toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd()  where I just know the basics of JavaScript like basic primitive and non primitive datatypes, functions and completely array. I don't know the objects in detail, I just know the push pop shift and unshift and splice method of the array. I don't have knowledge of any string related things, async await, dom, event handling, timers etc. include tasks based on method chaining