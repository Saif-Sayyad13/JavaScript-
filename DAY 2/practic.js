// // 1. Print each number
// const nums =[10,20,30,40];
// nums.forEach(function(n) {
//   console.log(n);
// });

// // 2. Print a greeting for each name
// const names = ["Amit", "Priya", "Rahul"];
// names.forEach(function(name) {
//   console.log("Hello " + name);
// });

// // 3. Print each number added by 5
// const scores =[10,20,30,40];
// scores.forEach(function(s) {
//   console.log(s + 5);
// });

// // 4. Print the index (position) and the value
// const colors = ["Red", "Green", "Blue"];
// colors.forEach(function(color, index) {
//   console.log(index + ": " + color);
// });

// // 5. Push doubled numbers into another empty array
// const original =[1, 2, 3];
// const doubled = [];
// original.forEach(function(num) {
//   doubled.push(num * 2);
// });
// console.log(doubled); // [2, 4, 6]

// // 6. Add up numbers using an outside variable
// const prices =[50, 100, 200];
// let total = 0;
// prices.forEach(function(price) {
//   total = total + price;
// });
// console.log(total); // 60

// // 7. Check if each number is even or odd
// const list =[1, 2, 3, 4, 5];
// list.forEach(function(n) {
//   if (n % 2 === 0) {
//     console.log(n + " is Even");
//   } else {
//     console.log(n + " is Odd");
//   }
// });





// // 1. Multiply every number by 10
// const nums =[1, 2, 3];
// const timesTen = nums.map(function(n) {
//   return n * 10;
// });
// console.log(timesTen); // [10, 20, 30]

// // 2. Add 1 to every number
// const counts =[0, 1, 2];
// const nextCounts = counts.map(function(c) {
//   return c + 1;
// });
// console.log(nextCounts); // [1, 2, 3]

// // 3. Add a rupee symbol before each price
// const rates =[50, 100, 200];
// const priceTags = rates.map(function(r) {
//   return "₹" + r;
// });
// console.log(priceTags); // ["₹50", "₹100", "₹200"]

// // 4. Square every number
// const side =[2, 3, 4]   ;
// const area = side.map(function(s) {
//   return s * s;
// });
// console.log(area); // [4, 9, 16]

// // 5. Turn numbers into true/false (is it greater than 10?)
// const ages =[5, 15, 25];
// const isOverTen = ages.map(function(age) {
//   return age > 10;
// });
// console.log(isOverTen); // [false, true, true]

// // 6. Add "!" to the end of each word
// const words = ["Hi", "Stop", "Go"];
// const loudWords = words.map(function(w) {
//   return w + "!";
// });
// console.log(loudWords); // ["Hi!", "Stop!", "Go!"]

// // 7. Subtract a discount of 5 from every price
// const mrp =[50, 40, 30];
// const salePrice = mrp.map(function(price) {
//   return price - 5;
// });
// console.log(salePrice); // [45, 35, 25]


// // 1. Keep numbers greater than 10
// const nums =[12, 20, 5, 15];
// const big = nums.filter(function(n) {
//   return n > 10;
// });
// console.log(big); // [12, 20]

// // 2. Keep only even numbers
// const allNums =[1, 2, 3, 4, 5, 6];
// const evens = allNums.filter(function(n) {
//   return n % 2 === 0;
// });
// console.log(evens); // [2, 4, 6]

// // 3. Keep only odd numbers
// const odds = allNums.filter(function(n) {
//   return n % 2 !== 0;
// });
// console.log(odds); // [1, 3, 5]

// // 4. Keep passing marks (35 or above)
// const marks =[45, 35, 80, 30]   ;
// const passed = marks.filter(function(m) {
//   return m >= 35;
// });
// console.log(passed); // [45, 35, 80]

// // 5. Remove zeroes from an array
// const data =[0, 5, 0, 9, 2, 0];
// const noZero = data.filter(function(d) {
//   return d !== 0;
// });
// console.log(noZero); // [5, 9, 2]

// // 6. Keep only "Apple" from a fruit basket
// const fruits = ["Apple", "Banana", "Apple", "Mango"];
// const apples = fruits.filter(function(f) {
//   return f === "Apple";
// });
// console.log(apples); // ["Apple", "Apple"]

// // 7. Keep only true values
// const flags = [true, false, true, true, false];
// const onlyTrue = flags.filter(function(flag) {
//   return flag === true;
// });
// console.log(onlyTrue); // [true, true, true]




// // 1. Sum of all numbers
// const nums =[1, 2, 3, 4];
// const sum = nums.reduce(function(total, n) {
//   return total + n;
// }, 0);
// console.log(sum); // 10

// // 2. Multiply all numbers together
// const factors =[1, 2, 3, 4];
// const product = factors.reduce(function(total, n) {
//   return total * n;
// }, 1); // Start with 1 for multiplication!
// console.log(product); // 24

// // 3. Find the largest number
// const values =[1, 2, 3, 4, 5, 6, 7, 89];
// const max = values.reduce(function(biggest, n) {
//   if (n > biggest) {
//     return n;
//   }
//   return biggest;
// }, 0);
// console.log(max); // 89

// // 4. Find the smallest number
// const temps =[12, 15, 10, 20];
// const min = temps.reduce(function(smallest, t) {
//   if (t < smallest) {
//     return t;
//   }
//   return smallest;
// }, temps[0]); // Start with the first item
// console.log(min); // 12

// // 5. Join words into one sentence
// const words = ["I", "love", "JavaScript"];
// const sentence = words.reduce(function(text, w) {
//   return text + " " + w;
// }, "");
// console.log(sentence); // " I love JavaScript"

// // 6. Subtract all expenses from a 1000 rupee budget
// const expenses = [100, 200, 300, 400];
// const moneyLeft = expenses.reduce(function(balance, cost) {
//   return balance - cost;
// }, 1000);
// console.log(moneyLeft); // 350

// // 7. Count how many times "Yes" appears
// let votes = ["Yes", "No", "Yes", "Yes", "No"];
// let  yesCount = votes.reduce(function(count, vote) {
//   if (vote === "Yes") {
//     return count + 1;
//   }
//   return count;
// }, 0);
// console.log(yesCount); // 3


