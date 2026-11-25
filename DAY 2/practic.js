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



// Part 1: Basic String Access & Character Codes (at, charAt, charCodeAt)

// 1. First Character Finder
// 	• Task: Write a function getFirstChar(str) that returns the first character of a string using charAt().
// 	• Input: "JavaScript"
// function getFirstChar(str) {
//   return str.charAt(0);
// }
// console.log(getFirstChar("JavaScript")); // "J"

// 2. Last Character with at()
// 	• Task: Write a function getLastChar(str) that returns the very last character of a string using at().
// 	• Input: "Developer"
// function getLastChar(str) {
//   return str.at(-1);
// }
// console.log(getLastChar("Developer")); // "r"

// 3. Second-to-Last Character
// 	• Task: Write a function getSecondLast(str) that uses at() to find the second-to-last character of a given word.
// 	• Input: "Coding"
// function getSecondLast(str) {
//   return str.at(-2);
// }
// console.log(getSecondLast("Coding")); // "n"

// 4. Character at Index 4
// 	• Task: Write a function getFifthChar(str) that gets the character at index 4 using charAt().
// 	• Input: "Programming"
// function getFifthChar(str) {
//   return str.charAt(4);
// }
// console.log(getFifthChar("Programming")); // "r"

// 5. Out of Bounds Check
// 	• Task: Write a function checkOutOfBounds(str) that tries to access index 50 using charAt() and returns the result.
// 	• Input: "Hello"
// function checkOutOfBounds(str) {
//   return str.charAt(50);
// }
// console.log(checkOutOfBounds("Hello")); // "" (empty string)

// 6. ASCII Value of First Letter
// 	• Task: Write a function getFirstAscii(str) that returns the UTF-16 code (ASCII value) of the first character using charCodeAt().
// 	• Input: "Apple"
// function getFirstAscii(str) {
//   return str.charCodeAt(0);
// }
// console.log(getFirstAscii("Apple")); // 65

// 7. Compare First and Last ASCII
// 	• Task: Write a function asciiDifference(str) that subtracts the character code of the second character from the first character.
// 	• Input: "BA"
// function asciiDifference(str) {
//   return str.charCodeAt(0) - str.charCodeAt(1);
// }
// console.log(asciiDifference("BA")); // 1

// 8. Store First and Last Characters in an Array
// 	• Task: Write a function extractEnds(str) that creates an empty array, uses push() to add the first character (using charAt) and the last character (using at), and returns the array.
// 	• Input: "Planet"
// function extractEnds(str) {
//   let result = [];
//   result.push(str.charAt(0));
//   result.push(str.at(-1));
//   return result;
// }
// console.log(extractEnds("Planet")); // ["P", "t"]


// Part 2: Case Conversion & Combining (toUpperCase, toLowerCase, concat)

// 9. Shout the Word
// 	• Task: Write a function makeLoud(str) that converts a message to all uppercase letters.
// 	• Input: "watch out"
// function makeLoud(str) {
//   return str.toUpperCase();
// }
// console.log(makeLoud("watch out")); // "WATCH OUT"

// 10. Whisper the Word
// 	• Task: Write a function makeQuiet(str) that converts an all-caps string to lowercase.
// 	• Input: "STOP YELLING"
// function makeQuiet(str) {
//   return str.toLowerCase();
// }
// console.log(makeQuiet("STOP YELLING")); // "stop yelling"

// 11. Full Name Combiner
// 	• Task: Write a function createFullName(first, last) that joins a first name, a space " ", and a last name using concat().
// 	• Input: "Rohan", "Sharma"
// function createFullName(first, last) {
//   return first.concat(" ", last);
// }
// console.log(createFullName("Rohan", "Sharma")); // "Rohan Sharma"

// 12. Greeting Builder
// 	• Task: Write a function greetUser(greeting, name, punctuation) that joins three strings together using concat().
// 	• Input: "Hello, ", "Priya", "!"
// function greetUser(greeting, name, punctuation) {
//   return greeting.concat(name, punctuation);
// }
// console.log(greetUser("Hello, ", "Priya", "!")); // "Hello, Priya!"

// 13. Array to Sentence with concat()
// 	• Task: Write a function joinTwoFromArray(arr) that takes an array of 3 words, removes the first two using shift(), and combines them with a space using concat().
// 	• Input: ["Good", "Morning", "Everyone"]
// function joinTwoFromArray(arr) {
//   let word1 = arr.shift();
//   let word2 = arr.shift();
//   return word1.concat(" ", word2);
// }
// console.log(joinTwoFromArray(["Good", "Morning", "Everyone"])); // "Good Morning"


// Part 3: Whitespace Removal (trim, trimStart, trimEnd)

// 14. Clean User Input
// 	• Task: Write a function cleanInput(str) that removes spaces from both ends of a string using trim().
// 	• Input: "   user@example.com   "
// function cleanInput(str) {
//   return str.trim();
// }
// console.log(cleanInput("   user@example.com   ")); // "user@example.com"

// 15. Remove Leading Spaces Only
// 	• Task: Write a function removeLeftSpace(str) that removes spaces only from the start of a string using trimStart().
// 	• Input: "     Indented text   "
// function removeLeftSpace(str) {
//   return str.trimStart();
// }
// console.log(removeLeftSpace("     Indented text   ")); // "Indented text   "

// 16. Remove Trailing Spaces Only
// 	• Task: Write a function removeRightSpace(str) that removes spaces only from the end of a string using trimEnd().
// 	• Input: "   Trailing text     "
// function removeRightSpace(str) {
//   return str.trimEnd();
// }
// console.log(removeRightSpace("   Trailing text     ")); // "   Trailing text"

// 17. Clean and Push to Array
// 	• Task: Write a function addCleanTag(tagsArray, newTag) that trims newTag and adds it to the end of tagsArray using push().
// 	• Input: ["js", "html"], "   css   "
// function addCleanTag(tagsArray, newTag) {
//   tagsArray.push(newTag.trim());
//   return tagsArray;
// }
// console.log(addCleanTag(["js", "html"], "   css   ")); // ["js", "html", "css"]


// Part 4: Searching & Checking (includes, startsWith, endsWith, indexOf, lastIndexOf)

// 18. Check for Secret Word
// 	• Task: Write a function hasSecret(sentence) that returns true if the word "treasure" is inside the sentence using includes().
// 	• Input: "The map leads to hidden treasure in the cave."
// function hasSecret(sentence) {
//   return sentence.includes("treasure");
// }
// console.log(hasSecret("The map leads to hidden treasure in the cave.")); // true

// 19. Validate Website URL
// 	• Task: Write a function isSecureUrl(url) that checks if a URL starts with "https://" using startsWith().
// 	• Input: "https://google.com"
// function isSecureUrl(url) {
//   return url.startsWith("https://");
// }
// console.log(isSecureUrl("https://google.com")); // true

// 20. Check Image File Extension
// 	• Task: Write a function isPngImage(filename) that returns true if the filename ends with ".png" using endsWith().
// 	• Input: "profile_pic.png"
// function isPngImage(filename) {
//   return filename.endsWith(".png");
// }
// console.log(isPngImage("profile_pic.png")); // true

// 21. Find First Position of a Word
// 	• Task: Write a function findFirstCat(text) that returns the starting index of the first occurrence of "cat" using indexOf().
// 	• Input: "The cat sat on the other cat."
// function findFirstCat(text) {
//   return text.indexOf("cat");
// }
// console.log(findFirstCat("The cat sat on the other cat.")); // 4

// 22. Find Last Position of a Word
// 	• Task: Write a function findLastCat(text) that returns the starting index of the last occurrence of "cat" using lastIndexOf().
// 	• Input: "The cat sat on the other cat."
// function findLastCat(text) {
//   return text.lastIndexOf("cat");
// }
// console.log(findLastCat("The cat sat on the other cat.")); // 25

// 23. Check if Word Appears Only Once
// 	• Task: Write a function appearsOnce(text, word) that returns true if indexOf(word) equals lastIndexOf(word) (and is not -1).
// 	• Input: "I love coding and coding is fun", "love"
// function appearsOnce(text, word) {
//   return text.indexOf(word) !== -1 && text.indexOf(word) === text.lastIndexOf(word);
// }
// console.log(appearsOnce("I love coding and coding is fun", "love")); // true

// 24. Find @ Symbol in Email
// 	• Task: Write a function findAtSymbol(email) that returns the index position of "@".
// 	• Input: "student123@school.edu"
// function findAtSymbol(email) {
//   return email.indexOf("@");
// }
// console.log(findAtSymbol("student123@school.edu")); // 10

// 25. Check Substring After Index 5
// 	• Task: Write a function startsWithWorldAt6(str) that checks if "World" starts at index 6 using the second parameter of startsWith().
// 	• Input: "Hello World"
// function startsWithWorldAt6(str) {
//   return str.startsWith("World", 6);
// }
// console.log(startsWithWorldAt6("Hello World")); // true

// 26. Check Ending Within First 5 Characters
// 	• Task: Write a function endsWithHelloIn5(str) that uses the length parameter of endsWith() to check if the first 5 characters end with "Hello".
// 	• Input: "Hello there"
// function endsWithHelloIn5(str) {
//   return str.endsWith("Hello", 5);
// }
// console.log(endsWithHelloIn5("Hello there")); // true

// 27. Store Search Indices in Array
// 	• Task: Write a function locatePositions(text, char) that creates an empty array, pushes the first index (indexOf) and last index (lastIndexOf) of char, and returns the array.
// 	• Input: "banana", "a"
// function locatePositions(text, char) {
//   let positions = [];
//   positions.push(text.indexOf(char));
//   positions.push(text.lastIndexOf(char));
//   return positions;
// }
// console.log(locatePositions("banana", "a")); // [1, 5]


// Part 5: Padding & Repeating (padStart, padEnd, repeat)

// 28. Format Invoice Number
// 	• Task: Write a function formatInvoice(numStr) that pads a string with "0" at the start until it reaches 6 characters using padStart().
// 	• Input: "45"
// function formatInvoice(numStr) {
//   return numStr.padStart(6, "0");
// }
// console.log(formatInvoice("45")); // "000045"

// 29. Mask Credit Card Digits
// 	• Task: Write a function maskCard(lastFour) that pads the last 4 digits of a card with "*" at the start to make a 16-character string.
// 	• Input: "8899"
// function maskCard(lastFour) {
//   return lastFour.padStart(16, "*");
// }
// console.log(maskCard("8899")); // "************8899"

// 30. Create Table Price Alignment
// 	• Task: Write a function alignLabel(label) that pads a label on the right with "." until it is 15 characters long using padEnd().
// 	• Input: "Coffee"
// function alignLabel(label) {
//   return label.padEnd(15, ".");
// }
// console.log(alignLabel("Coffee")); // "Coffee........."

// 31. Generate Divider Line
// 	• Task: Write a function makeDivider(char, count) that repeats a character count times using repeat().
// 	• Input: "-", 20
// function makeDivider(char, count) {
//   return char.repeat(count);
// }
// console.log(makeDivider("-", 20)); // "--------------------"

// 32. Echo Effect
// 	• Task: Write a function echoWord(word) that repeats a word 3 times with a space after it.
// 	• Input: "Echo "
// function echoWord(word) {
//   return word.repeat(3);
// }
// console.log(echoWord("Echo ")); // "Echo Echo Echo "

// 33. Build Staircase Array
// 	• Task: Write a function buildSteps(symbol) that creates an empty array and uses push() and repeat() to add 1 symbol, 2 symbols, and 3 symbols.
// 	• Input: "#"
// function buildSteps(symbol) {
//   let steps = [];
//   steps.push(symbol.repeat(1));
//   steps.push(symbol.repeat(2));
//   steps.push(symbol.repeat(3));
//   return steps;
// }
// console.log(buildSteps("#")); // ["#", "##", "###"]


// Part 6: Method Chaining (Combining Multiple String Methods)

// 34. Clean and Capitalize
// 	• Task: Write a function normalizeCode(code) that removes surrounding spaces using trim() and converts the result to uppercase using toUpperCase() in one chained expression.
// 	• Input: "   ab-992-x   "
// function normalizeCode(code) {
//   return code.trim().toUpperCase();
// }
// console.log(normalizeCode("   ab-992-x   ")); // "AB-992-X"

// 35. Clean and Check Email Domain
// 	• Task: Write a function isGmail(email) that trims spaces, converts to lowercase, and checks if it ends with "@gmail.com" using method chaining.
// 	• Input: "   User.Name@GMAIL.COM  "
// function isGmail(email) {
//   return email.trim().toLowerCase().endsWith("@gmail.com");
// }
// console.log(isGmail("   User.Name@GMAIL.COM  ")); // true

// 36. Clean, Lowercase, and Search
// 	• Task: Write a function containsAdmin(username) that trims spaces, converts to lowercase, and checks if "admin" is included.
// 	• Input: "   Super_ADMIN_01   "
// function containsAdmin(username) {
//   return username.trim().toLowerCase().includes("admin");
// }
// console.log(containsAdmin("   Super_ADMIN_01   ")); // true

// 37. Get Last Character After Trimming
// 	• Task: Write a function realLastChar(str) that trims trailing whitespace using trimEnd() and gets the last character using at(-1).
// 	• Input: "Hello World!     "
// function realLastChar(str) {
//   return str.trimEnd().at(-1);
// }
// console.log(realLastChar("Hello World!     "));

// 38. Get First Character After Left Trim and Uppercase
// 	• Task: Write a function firstInitial(name) that removes leading spaces with trimStart(), converts to uppercase, and grabs index 0 with charAt(0).
// 	• Input: "    vikram"
// function firstInitial(name) {
//   return name.trimStart().toUpperCase().charAt(0);
// }
// console.log(firstInitial("    vikram"));

// 39. Clean, Pad, and Uppercase ID
// 	• Task: Write a function formatEmployeeId(rawId) that trims spaces, converts to uppercase, and pads the start with "0" to length 8.
// 	• Input: "  a42  "
// function formatEmployeeId(rawId) {
//   return rawId.trim().toUpperCase().padStart(8, "0");
// }
// console.log(formatEmployeeId("  a42  ")); // "00000A42"

// 40. Trim, Repeat, and Trim End
// 	• Task: Write a function repeatCleanWord(word) that trims the input, adds a space via concat(" "), repeats it 3 times, and removes the final trailing space with trimEnd().
// 	• Input: "   Go   "
// function repeatCleanWord(word) {
//   return word.trim().concat(" ").repeat(3).trimEnd();
// }
// console.log(repeatCleanWord("   Go   ")); // "Go Go Go"

// 41. Verify File Prefix Case-Insensitively
// 	• Task: Write a function isReportFile(filename) that trims spaces, converts to lowercase, and checks if it starts with "report_".
// 	• Input: "  REPORT_2026.pdf "
// function isReportFile(filename) {
//   return filename.trim().toLowerCase().startsWith("report_");
// }
// console.log(isReportFile("  REPORT_2026.pdf ")); // true

// 42. Find Index After Cleaning
// 	• Task: Write a function findKeywordIndex(sentence, keyword) that converts both the sentence and keyword to lowercase (trimming the sentence first) and returns the indexOf.
// 	• Input: "   Learning JAVASCRIPT is fun!  ", "javascript"
// function findKeywordIndex(sentence, keyword) {
//   return sentence.trim().toLowerCase().indexOf(keyword.toLowerCase());
// }
// console.log(findKeywordIndex("   Learning JAVASCRIPT is fun!  ", "javascript")); // 9

// 43. ASCII of Cleaned First Character
// 	• Task: Write a function cleanFirstCharCode(str) that trims the string, converts it to uppercase, and returns the charCodeAt(0).
// 	• Input: "   zebra   "
// function cleanFirstCharCode(str) {
//   return str.trim().toUpperCase().charCodeAt(0);
// }
// console.log(cleanFirstCharCode("   zebra   ")); // 90 (ASCII for 'Z')

// 44. Format Menu Item with Chaining
// 	• Task: Write a function formatMenuItem(item, price) that trims item, converts it to uppercase, pads the end with "." to 12 characters, and concatenates price.
// 	• Input: "  tea  ", "$2"
// function formatMenuItem(item, price) {
//   return item.trim().toUpperCase().padEnd(12, ".").concat(price);
// }
// console.log(formatMenuItem("  tea  ", "$2")); // "TEA.........$2"

// 45. Join Two Dirty Names Cleanly
// 	• Task: Write a function cleanFullName(first, last) that trims first and converts to uppercase, then concatenates " " and the trimmed uppercase last.
// 	• Input: "  ananya  ", "  verma  "
// function cleanFullName(first, last) {
//   return first.trim().toUpperCase().concat(" ", last.trim().toUpperCase());
// }
// console.log(cleanFullName("  ananya  ", "  verma  ")); // "ANANYA VERMA"


// Part 7: Combining Strings with Array Methods (push, pop, shift, unshift, splice)

// 46. Process Queue of Dirty Strings
// 	• Task: Write a function processFirstItem(queue) that removes the first item from queue using shift(), cleans it with trim().toLowerCase(), and puts it at the end of queue using push(). Return the updated array.
// 	• Input: ["   APPLE  ", "BANANA", "CHERRY"]
// function processFirstItem(queue) {
//   let item = queue.shift().trim().toLowerCase();
//   queue.push(item);
//   return queue;
// }
// console.log(processFirstItem(["   APPLE  ", "BANANA", "CHERRY"])); 
// // ["BANANA", "CHERRY", "apple"]

// 47. Pop, Format, and Unshift
// 	• Task: Write a function promoteLastItem(list) that removes the last element using pop(), converts it to uppercase, adds "★ " in front using concat(), and inserts it at the beginning of the array using unshift().
// 	• Input: ["task 1", "task 2", "urgent"]
// function promoteLastItem(list) {
//   let last = list.pop().toUpperCase();
//   list.unshift("★ ".concat(last));
//   return list;
// }
// console.log(promoteLastItem(["task 1", "task 2", "urgent"])); 
// // ["★ URGENT", "task 1", "task 2"]

// 48. Replace Middle Element with Padded Version
// 	• Task: Write a function padMiddleCode(codes) that uses splice() 
// to replace the element at index 1 with its padStart(5, "0") version.
// 	• Input: ["101", "7", "305"]
// function padMiddleCode(codes) {
//   let padded = codes[1].padStart(5, "0");
//   codes.splice(1, 1, padded);
//   return codes;
// }
// console.log(padMiddleCode(["101", "7", "305"])); // ["101", "00007", "305"]

// 49. Build Acronym Array from Three Words
// 	• Task: Write a function getInitialsArray(words) that takes an array of 3 words,
//  extracts the first character of each using charAt(0).toUpperCase(), pushes them into a new array, and returns it.
// 	• Input: ["world", "wide", "web"]
// function getInitialsArray(words) {
//   let initials = [];
//   initials.push(words[0].charAt(0).toUpperCase());
//   initials.push(words[1].charAt(0).toUpperCase());
//   initials.push(words[2].charAt(0).toUpperCase());
//   return initials;
// }
// console.log(getInitialsArray(["world", "wide", "web"])); // ["W", "W", "W"]

// 50. Ultimate Combo: Clean, Validate, and Store
// 	• Task: Write a function registerCode(existingCodes, rawInput) that trims rawInput, 
// converts it to uppercase, pads it to 6 characters with "X" at the end (padEnd), 
// checks if it starts with "ID", and if it does, adds it to the start of existingCodes
//  using unshift(). Return existingCodes.
// 	• Input: ["ID99XX"], "  id42  "

// function registerCode(existingCodes, rawInput) {
//   let formatted = rawInput.trim().toUpperCase().padEnd(6, "X");
//   if (formatted.startsWith("ID")) {
//     existingCodes.unshift(formatted);
//   }
//   return existingCodes;
// }
// console.log(registerCode(["ID99XX"], "  id42  "));


// #objects

// 1. Create an Object: Define a car object with properties brand, model, and year.
// 2. Dot Notation: Log the brand of the car using dot notation.
// 3. Bracket Notation: Access and log the model using bracket notation (car["model"]).
// 4. Add a Property: Add a color property to car after it has been created.
// 5. Modify a Property: Update the year property to 2026.
// 6. Delete a Property: Remove the color property using the delete operator.
// 7. Check Key Existence: Verify if mileage exists in car using Object.hasOwn(car, "mileage").
// 8. Object Method: Add a start() method to car that logs "Engine started".
// 9. Using this: Add a getInfo() method returning "Brand Model (Year)" using this.
// 10. Nested Objects: Create a student object with a nested grades object (math, science) and log math.

// Part 2: Iteration, Built-in Methods & Destructuring (Tasks 11–20)

// 11. Loop Keys (for...in): Iterate over car and print each key name.
// 12. Loop Keys & Values: Use for...in to log both keys and values in "key: value" format.
// 13. Get All Keys: Use Object.keys() to store all keys of student in an array.
// 14. Get All Values: Use Object.values() to calculate the sum of all numbers inside student.grades.
// 15. Get Entries: Use Object.entries() to convert car into an array of [key, value] pairs.
// 16. Entries to Object: Convert an array of pairs [["a", 1], ["b", 2]] back into an object using Object.fromEntries().
// 17. Basic Destructuring: Extract brand and year from car into variables in one line.
// 18. Destructuring with Alias: Extract model from car into a variable named carModel.
// 19. Default Values in Destructuring: Destructure fuelType = "Petrol" from car so it defaults when missing.
// 20. Optional Chaining (?.): Safely access student.address?.city without throwing an error if address is undefined.

// Part 3: Advanced Patterns & Real-World Logic (Tasks 21–30)

// 21. Shallow Clone (...): Create a copy of car using the spread operator ({ ...car }).
// 22. Merge Objects (...): Merge defaultSettings and userSettings so user settings overwrite defaults.
// 23. Rest in Destructuring (...): Extract brand from car and collect the remaining properties into a rest object.
// 24. Dynamic Keys: Write a function setProp(obj, key, val) that returns a new object with the dynamic key added.
// 25. Filter Array of Objects: Given an array of users ({ name, age }), return only users aged 18 or older.
// 26. Find in Array of Objects: Use .find() to locate the user object where name === "Aarav".
// 27. Sort Array of Objects: Sort an array of items ({ name, price }) from lowest to highest price.
// 28. Count Occurrences: Given ["apple", "banana", "apple"], build a frequency object { apple: 2, banana: 1 }.
// 29. Freeze vs. Seal: Apply Object.seal() to an object, modify an existing property, and test adding a new one.
// 30. Deep Clone: Create a true deep copy of a nested object using structuredClone().

// // Q1. Create an Object: Define a car object with properties brand, model, and year.
// let car = {
//   brand: "Tata",
//   model: "Nexon",
//   year: 2024
// };
// console.log("Q1:", car);

// // Q2. Dot Notation: Log the brand of the car using dot notation.
// console.log("Q2:", car.brand);

// // Q3. Bracket Notation: Access and log the model using bracket notation.
// console.log("Q3:", car["model"]);

// // Q4. Add a Property: Add a color property to car after it has been created.
// car.color = "Blue";
// console.log("Q4:", car);

// // Q5. Modify a Property: Update the year property to 2026.
// car.year = 2026;
// console.log("Q5:", car.year);

// // Q6. Delete a Property: Remove the color property using the delete operator.
// delete car.color;
// console.log("Q6:", car);

// // Q7. Check Key Existence: Verify if mileage exists in car using Object.hasOwn().
// console.log("Q7:", Object.hasOwn(car, "mileage"));

// // Q8. Object Method: Add a start() method to car that logs "Engine started".
// car.start = function () {
//   console.log("Q8: Engine started");
// };
// car.start();

// // Q9. Using `this`: Add a getInfo() method returning "Brand Model (Year)" using this.
// car.getInfo = function () {
//   return `${this.brand} ${this.model} (${this.year})`;
// };
// console.log("Q9:", car.getInfo());

// // Q10. Nested Objects: Create a student object with a nested grades object (math, science) and log math.
// let student = {
//   name: "Riya",
//   grades: {
//     math: 92,
//     science: 88
//   }
// };
// console.log("Q10:", student.grades.math);


// // Q11. Loop Keys (for...in): Iterate over car and print each key name.
// for (let key in car) {
//   console.log("Q11 Key:", key);
// }

// // Q12. Loop Keys & Values: Use for...in to log both keys and values in "key: value" format.
// for (let key in car) {
//   console.log(`Q12: ${key}: ${car[key]}`);
// }

// // Q13. Get All Keys: Use Object.keys() to store all keys of student in an array.
// let studentKeys = Object.keys(student);
// console.log("Q13:", studentKeys);

// // Q14. Get All Values: Use Object.values() to calculate the sum of all numbers inside student.grades.
// let gradeValues = Object.values(student.grades);
// let totalMarks = gradeValues.reduce((sum, val) => sum + val, 0);
// console.log("Q14:", totalMarks);

// // Q15. Get Entries: Use Object.entries() to convert car into an array of [key, value] pairs.
// let carEntries = Object.entries(car);
// console.log("Q15:", carEntries);

// // Q16. Entries to Object: Convert an array of pairs [["a", 1], ["b", 2]] back into an object using Object.fromEntries().
// let pairs = [["a", 1], ["b", 2]];
// let reconstructedObj = Object.fromEntries(pairs);
// console.log("Q16:", reconstructedObj);

// // Q17. Basic Destructuring: Extract brand and year from car into variables in one line.
// let { brand, year } = car;
// console.log("Q17:", brand, year);

// // Q18. Destructuring with Alias: Extract model from car into a variable named carModel.
// let { model: carModel } = car;
// console.log("Q18:", carModel);

// // Q19. Default Values in Destructuring: Destructure fuelType = "Petrol" from car so it defaults when missing.
// let { fuelType = "Petrol" } = car;
// console.log("Q19:", fuelType);

// // Q20. Optional Chaining (?.): Safely access student.address?.city without throwing an error if address is undefined.
// console.log("Q20:", student.address?.city);



// // Q21. Shallow Clone (...): Create a copy of car using the spread operator ({ ...car }).
// let carCopy = { ...car };
// console.log("Q21:", carCopy);

// // Q22. Merge Objects (...): Merge defaultSettings and userSettings so user settings overwrite defaults.
// let defaultSettings = { theme: "light", notifications: true };
// let userSettings = { theme: "dark" };
// let finalSettings = { ...defaultSettings, ...userSettings };
// console.log("Q22:", finalSettings);

// // Q23. Rest in Destructuring (...): Extract brand from car and collect the remaining properties into a restCarProps object.
// let { brand: mainBrand, ...restCarProps } = car;
// console.log("Q23:", restCarProps);

// // Q24. Dynamic Keys: Write a function setProp(obj, key, val) that returns a new object with the dynamic key added.
// function setProp(obj, key, val) {
//   return { ...obj, [key]: val };
// }
// console.log("Q24:", setProp({ a: 1 }, "b", 2));

// // Q25. Filter Array of Objects: Given an array of users ({ name, age }), return only users aged 18 or older.
// let users = [
//   { name: "Aarav", age: 24 },
//   { name: "Meera", age: 16 },
//   { name: "Kabir", age: 19 }
// ];
// let adults = users.filter(user => user.age >= 18);
// console.log("Q25:", adults);

// // Q26. Find in Array of Objects: Use .find() to locate the user object where name === "Aarav".
// let aarav = users.find(user => user.name === "Aarav");
// console.log("Q26:", aarav);

// // Q27. Sort Array of Objects: Sort an array of items ({ name, price }) from lowest to highest price.
// let items = [
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Cable", price: 300 }
// ];
// let sortedItems = [...items].sort((a, b) => a.price - b.price);
// console.log("Q27:", sortedItems);

// // Q28. Count Occurrences: Given ["apple", "banana", "apple"], build a frequency object { apple: 2, banana: 1 }.
// let fruits = ["apple", "banana", "apple"];
// let countMap = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log("Q28:", countMap);

// // Q29. Freeze vs. Seal: Apply Object.seal() to an object, modify an existing property, and test adding a new one.
// let sealedObj = Object.seal({ status: "active" });
// sealedObj.status = "inactive"; // Works
// sealedObj.newProp = 123;       // Ignored (fails in strict mode)
// console.log("Q29:", sealedObj);

// // Q30. Deep Clone: Create a true deep copy of a nested object using structuredClone().
// let nestedOriginal = { user: { name: "Ananya" } };
// let deepCopy = structuredClone(nestedOriginal);
// deepCopy.user.name = "Vikram";
// console.log("Q30 Original:", nestedOriginal.user.name);
// console.log("Q30 Copy:", deepCopy.user.name);




// // Q1. Spread Arrays: Combine two arrays [1, 2] and [3, 4] into one new array using spread.
// let arr1 =;
// let arr2 =;
// let combinedArr = [...arr1, ...arr2];
// console.log("Q1:", combinedArr);

// // Q2. Add Elements with Spread: Create a new array by adding 0 at the start and 5 at the end of.
// let extendedArr = [0, ...combinedArr, 5];
// console.log("Q2:", extendedArr);

// // Q3. Spread String to Array: Convert the string "CODE" into an array of individual characters using spread.
// let word = "CODE";
// let letters = [...word];
// console.log("Q3:", letters);

// // Q4. Spread in Function Calls: Pass an array of numbers [10, 45, 22, 89, 5] into Math.max() using spread.
// let scores =;
// let highestScore = Math.max(...scores);
// console.log("Q4:", highestScore);

// // Q5. Clone & Override Object: Clone { name: "Rohan", role: "User" } and override role to "Admin" in one line.
// let baseUser = { name: "Rohan", role: "User" };
// let adminUser = { ...baseUser, role: "Admin" };
// console.log("Q5:", adminUser);

// // Q6. Rest Parameters in Function: Write a function sumAll(...nums) that accepts any number of arguments and returns their sum.
// function sumAll(...nums) {
//   return nums.reduce((total, n) => total + n, 0);
// }
// console.log("Q6:", sumAll(5, 10, 15, 20));

// // Q7. Rest with Fixed Parameters: Write introduce(firstName, lastName, ...hobbies) and log the hobbies array.
// function introduce(firstName, lastName, ...hobbies) {
//   console.log("Q7:", `${firstName} ${lastName} loves:`, hobbies);
// }
// introduce("Neha", "Sharma", "Reading", "Coding", "Cycling");

// // Q8. Conditional Property with Spread: Add { isVerified: true } to an object only if isLoggedIn is true.
// let isLoggedIn = true;
// let profile = { username: "dev_raj", ...(isLoggedIn && { isVerified: true }) };
// console.log("Q8:", profile);

// // Q9. Remove Duplicates with Spread & Set: Remove duplicates from [1, 2, 2, 3, 4, 4, 5] using Set and spread.
// let dupNums =;
// let uniqueNums = [...new Set(dupNums)];
// console.log("Q9:", uniqueNums);

// // Q10. Merge Multiple Objects: Merge objA, objB, and objC into a single object where later keys overwrite earlier ones.
// let objA = { a: 1, b: 2 };
// let objB = { b: 20, c: 3 };
// let objC = { c: 30, d: 4 };
// let mergedAll = { ...objA, ...objB, ...objC };
// console.log("Q10:", mergedAll);


// // Q11. Array Destructuring with Rest: Extract the first element into `first` and the rest into `others` from.
// let numbers =;
// let [first, ...others] = numbers;
// console.log("Q11:", first, others);

// // Q12. Skip Elements in Array Destructuring: Extract the 1st and 3rd items from ["Red", "Green", "Blue"] into variables.
// let colors = ["Red", "Green", "Blue"];
// let [primary, , tertiary] = colors;
// console.log("Q12:", primary, tertiary);

// // Q13. Swap Variables: Swap the values of let x = "A" and let y = "B" using array destructuring.
// let x = "A";
// let y = "B";
// [x, y] = [y, x];
// console.log("Q13:", x, y);

// // Q14. Object Destructuring with Rest: Extract `id` from { id: 101, title: "Laptop", price: 55000 } and collect the rest into `details`.
// let product = { id: 101, title: "Laptop", price: 55000 };
// let { id, ...details } = product;
// console.log("Q14:", id, details);

// // Q15. Rename & Default Value: Extract `name` as `empName` and set `department = "IT"` if missing from { name: "Karan" }.
// let emp = { name: "Karan" };
// let { name: empName, department = "IT" } = emp;
// console.log("Q15:", empName, department);

// // Q16. Nested Object Destructuring: Extract `city` and `pin` directly from { user: "Pooja", address: { city: "Pune", pin: 411001 } }.
// let customer = { user: "Pooja", address: { city: "Pune", pin: 411001 } };
// let { address: { city, pin } } = customer;
// console.log("Q16:", city, pin);

// // Q17. Destructuring Function Parameters: Write a function displayProduct({ title, price }) that logs "Laptop costs 55000".
// function displayProduct({ title, price }) {
//   console.log("Q17:", `${title} costs ${price}`);
// }
// displayProduct(product);

// // Q18. Destructuring Inside Array of Objects: Extract the `name` of the second user from [{ name: "A" }, { name: "B" }].
// let list = [{ name: "A" }, { name: "B" }];
// let [, { name: secondUserName }] = list;
// console.log("Q18:", secondUserName);

// // Q19. Exclude a Property Immutably: Remove `password` from { user: "sid", password: "123", email: "s@mail.com" } using destructuring + rest.
// let account = { user: "sid", password: "123", email: "s@mail.com" };
// let { password, ...safeAccount } = account;
// console.log("Q19:", safeAccount);

// // Q20. Array Destructuring in Function Return: Write getStats() returning [min, max] and destructure both values.
// function getStats() {
//   return;
// }
// let [minVal, maxVal] = getStats();
// console.log("Q20:", minVal, maxVal);



// // Q21. Object to JSON String: Convert { course: "JS", level: "Pro" } into a JSON string using JSON.stringify().
// let courseObj = { course: "JS", level: "Pro" };
// let jsonString = JSON.stringify(courseObj);
// console.log("Q21:", jsonString);

// // Q22. JSON String to Object: Parse '{"city":"Mumbai","temp":32}' back into a JavaScript object using JSON.parse().
// let rawJson = '{"city":"Mumbai","temp":32}';
// let parsedWeather = JSON.parse(rawJson);
// console.log("Q22:", parsedWeather.city, parsedWeather.temp);

// // Q23. Pretty-Print JSON: Format { a: 1, b: [2, 3] } as a readable JSON string with 2-space indentation.
// let dataObj = { a: 1, b: [2, 3] };
// let prettyJson = JSON.stringify(dataObj, null, 2);
// console.log("Q23:\n" + prettyJson);

// // Q24. Filter Keys with JSON.stringify Replacer: Stringify { name: "Amit", age: 25, secret: "xyz" } keeping only "name" and "age".
// let userRecord = { name: "Amit", age: 25, secret: "xyz" };
// let filteredJson = JSON.stringify(userRecord, ["name", "age"]);
// console.log("Q24:", filteredJson);

// // Q25. Deep Clone via JSON: Deep-clone a nested object { team: { lead: "Sneha" } } using JSON.parse(JSON.stringify()).
// let originalTeam = { team: { lead: "Sneha" } };
// let clonedTeam = JSON.parse(JSON.stringify(originalTeam));
// clonedTeam.team.lead = "Arjun";
// console.log("Q25 Original:", originalTeam.team.lead, "| Clone:", clonedTeam.team.lead);

// // Q26. Parse + Destructure in One Step: Parse '{"id":7,"status":"shipped"}' and destructure `status` immediately.
// let orderJson = '{"id":7,"status":"shipped"}';
// let { status } = JSON.parse(orderJson);
// console.log("Q26:", status);

// // Q27. Parse + Spread Update + Stringify: Parse '{"count":5}', increment count using spread, and convert back to JSON.
// let stateJson = '{"count":5}';
// let parsedState = JSON.parse(stateJson);
// let updatedJson = JSON.stringify({ ...parsedState, count: parsedState.count + 1 });
// console.log("Q27:", updatedJson);

// // Q28. JSON.parse Reviver Function: Parse '{"price":"500"}' and convert the string price into a Number inside JSON.parse().
// let itemJson = '{"price":"500"}';
// let parsedItem = JSON.parse(itemJson, (key, value) => {
//   return key === "price" ? Number(value) : value;
// });
// console.log("Q28:", parsedItem.price, typeof parsedItem.price);

// // Q29. Parse JSON Array + Rest Destructuring: Parse '["Task1","Task2","Task3"]' and separate the first task from the rest.
// let tasksJson = '["Task1","Task2","Task3"]';
// let [urgentTask, ...remainingTasks] = JSON.parse(tasksJson);
// console.log("Q29:", urgentTask, remainingTasks);

// // Q30. Full Pipeline (Parse -> Destructure -> Spread -> Stringify): Remove `token` from a JSON user string and re-stringify.
// let apiResponse = '{"id":9,"username":"coder99","token":"secret_abc","role":"member"}';
// let { token, ...cleanUser } = JSON.parse(apiResponse);
// let finalPayload = JSON.stringify({ ...cleanUser, active: true });
// console.log("Q30:", finalPayload);




