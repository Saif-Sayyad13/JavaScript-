
// 1. Character Access & Unicode (at(), charAt(), charCodeAt())

// 1. First and Last Initial Extractor: Write a function that takes a string and returns a two-character string made of its first and last characters using at().
// 	• Input: "JavaScript"
// 	• Expected Output: "Jt"
// 2. Legacy Character Finder: Write a function that takes a string and an index number, returning the character at that position using charAt(). If the index is out of bounds, return "Invalid Index".
// 	• Input: "Coding", 2
// 	• Expected Output: "d"
// 3. Negative Index Lookup: Write a function that retrieves the third-to-last character of any given word using at().
// 	• Input: "Developer"
// 	• Expected Output: "p"
// 4. ASCII Code Detector: Write a function that takes a single-character string and returns its UTF-16 character code using charCodeAt().
// 	• Input: "A"
// 	• Expected Output: 65
// 5. Middle Character Grabber: Write a function that calculates the middle index of an odd-length string and returns that character using charAt().
// 	• Input: "React"
// 	• Expected Output: "a"
// 6. Secret Code Sum: Write a function that takes a 3-letter word and returns the sum of the charCodeAt() values of all three characters.
// 	• Input: "cat"
// 	• Expected Output: 312 (99 + 97 + 116)
// 7. Array of First Characters: Write a function that accepts an array of 3 strings, extracts the first character of each using at(0), and pushes them into a new array.
// 	• Input: ["Apple", "Banana", "Cherry"]
// 	• Expected Output: ["A", "B", "C"]

// 2. Case Conversion & Whitespace Cleaning (toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd())

// 8. Shout Converter: Write a function that converts a calm sentence into all uppercase letters using toUpperCase().
// 	• Input: "hello world"
// 	• Expected Output: "HELLO WORLD"
// 9. Whisper Converter: Write a function that converts an all-caps string into lowercase using toLowerCase().
// 	• Input: "STOP YELLING"
// 	• Expected Output: "stop yelling"
// 10. Clean Username: Write a function that removes accidental spaces from both the beginning and end of a user's input using trim().
// 	• Input: "   coder99   "
// 	• Expected Output: "coder99"
// 11. Left Margin Fixer: Write a function that removes only the leading spaces from an indented line of text using trimStart().
// 	• Input: "     indented text   "
// 	• Expected Output: "indented text   "
// 12. Trailing Space Remover: Write a function that removes spaces only from the end of a string using trimEnd().
// 	• Input: "   clean end     "
// 	• Expected Output: "   clean end"
// 13. Case-Insensitive Matcher: Write a function that takes two strings and checks if they are identical regardless of casing by converting both with toLowerCase().
// 	• Input: "JavaScript", "javascript"
// 	• Expected Output: true
// 14. Queue Cleaner: Write a function that takes an array of messy strings, removes the first item using shift(), cleans its whitespace with trim(), and puts it back at the front with unshift().
// 	• Input: ["  milk  ", "eggs", "bread"]
// 	• Expected Output: ["milk", "eggs", "bread"]

// 3. Searching & Checking (includes(), startsWith(), endsWith(), indexOf(), lastIndexOf())

// 15. Keyword Detector: Write a function that checks if a sentence contains the word "error" using includes().
// 	• Input: "System error detected"
// 	• Expected Output: true
// 16. URL Security Checker: Write a function that verifies if a website link starts with "https://" using startsWith().
// 	• Input: "https://example.com"
// 	• Expected Output: true
// 17. Image File Validator: Write a function that checks if a filename ends with ".png" using endsWith().
// 	• Input: "profile_pic.png"
// 	• Expected Output: true
// 18. First Vowel Position: Write a function that finds the index of the first occurrence of the letter "e" using indexOf().
// 	• Input: "experience"
// 	• Expected Output: 0
// 19. Last Slash Finder: Write a function that finds the index of the very last "/" in a file path using lastIndexOf().
// 	• Input: "users/docs/resume.pdf"
// 	• Expected Output: 10
// 20. Duplicate Character Checker: Write a function that takes a string and a letter, returning true if the letter appears more than once (hint: compare indexOf() and lastIndexOf()).
// 	• Input: "banana", "a"
// 	• Expected Output: true
// 21. Search from Offset: Write a function that searches for the word "code" starting from index 10 using the second parameter of indexOf().
// 	• Input: "code fast, code clean"
// 	• Expected Output: 11
// 22. Valid Email Symbol Check: Write a function that checks if a string includes "@" and does not start with "@" using includes() and startsWith().
// 	• Input: "user@mail.com"
// 	• Expected Output: true

// 4. Combining, Repeating & Padding (concat(), repeat(), padStart(), padEnd())

// 23. Full Name Joiner: Write a function that takes a first name, a space " ", and a last name, joining them using concat().
// 	• Input: "Ada", "Lovelace"
// 	• Expected Output: "Ada Lovelace"
// 24. Echo Generator: Write a function that takes a word and a number n, repeating the word n times using repeat().
// 	• Input: "Ha", 4
// 	• Expected Output: "HaHaHaHa"
// 25. Receipt Price Formatter: Write a function that pads a price string on the right with dots "." until it reaches a total length of 10 using padEnd().
// 	• Input: "$15"
// 	• Expected Output: "$15......."
// 26. Invoice Number Padder: Write a function that formats an ID number by padding the start with zeros "0" until it is 6 characters long using padStart().
// 	• Input: "42"
// 	• Expected Output: "000042"
// 27. Credit Card Masker: Write a function that takes the last 4 digits of a card and pads the start with "*" to make a 16-character string using padStart().
// 	• Input: "8819"
// 	• Expected Output: "************8819"
// 28. Divider Line Creator: Write a function that takes a single symbol (like "-") and repeats it 20 times to create a console divider using repeat().
// 	• Input: "="
// 	• Expected Output: "===================="
// 29. Array Sentence Builder: Write a function that takes an array of 3 words, pops each word off using pop(), and joins them in reverse order with spaces using concat().
// 	• Input: ["world", "hello", "say"]
// 	• Expected Output: "say hello world"

// 5. Method Chaining Tasks

// 30. Normalized Email Check: Write a function that trims whitespace from an email input, converts it to lowercase, and checks if it ends with "@gmail.com".
// 	• Input: "   Alex.Smith@GMAIL.COM  "
// 	• Expected Output: true
// 31. Clean Shout: Write a function that removes leading and trailing spaces from a string and converts the remaining text to uppercase in one chained expression.
// 	• Input: "   watch out!   "
// 	• Expected Output: "WATCH OUT!"
// 32. Last Character Code: Write a function that trims a string, grabs its very last character using at(-1), and returns its UTF-16 code with charCodeAt(0).
// 	• Input: "   JavaScript   "
// 	• Expected Output: 116 (code for 't')
// 33. Case-Insensitive Keyword Search: Write a function that takes a messy sentence and a search word, cleans and lowercases the sentence, and checks if it includes() the lowercased search word.
// 	• Input: "   Welcome to THE Jungle  ", "the"
// 	• Expected Output: true
// 34. Padded & Uppercased Tag: Write a function that trims a tag name, converts it to uppercase, and pads the end with "-" up to 10 characters.
// 	• Input: "  sale "
// 	• Expected Output: "SALE------"
// 35. Repeated Initial: Write a function that trims a name, gets its first character using charAt(0), converts it to uppercase, and repeats it 5 times.
// 	• Input: "   bravo"
// 	• Expected Output: "BBBBB"
// 36. Safe Prefix Check: Write a function that removes only starting spaces using trimStart(), converts the text to lowercase, and checks if it startsWith("admin_").
// 	• Input: "    ADMIN_root"
// 	• Expected Output: true
// 37. Formatted ID Concatenation: Write a function that takes a prefix "ID-" and a raw number "7", pads the number to 4 digits with "0", and joins them using concat().
// 	• Input: "ID-", "7"
// 	• Expected Output: "ID-0007"
// 38. Trimmed Index Finder: Write a function that trims a string, converts it to lowercase, and returns the indexOf("js").
// 	• Input: "   I love JS!   "
// 	• Expected Output: 7
// 39. Clean File Extension Verification: Write a function that trims trailing spaces with trimEnd(), converts to lowercase, and checks if it endsWith(".jpg").
// 	• Input: "HolidayPhoto.JPG    "
// 	• Expected Output: true
// 40. Repeated & Concatenated Border: Write a function that takes a title, trims it, uppercases it, and uses concat() with "*".repeat(3) on both sides.
// 	• Input: "  menu  "
// 	• Expected Output: "***MENU***"

// 6. Combined Array (push, pop, shift, unshift, splice) & String Challenges

// 41. Array Item Normalizer: Write a function that takes an array of 2 strings, uses splice() to replace the second item with a trimmed and uppercased version of itself.
// 	• Input: ["first", "  second  "]
// 	• Expected Output: ["first", "SECOND"]
// 42. Stack Filter: Write a function that pops the last string from an array, checks if it includes("urgent"), and if true, pushes "HIGH PRIORITY" onto the array.
// 	• Input: ["task 1", "urgent bug"]
// 	• Expected Output: ["task 1", "HIGH PRIORITY"]
// 43. Header Formatter: Write a function that shifts the first element from an array, trims it, pads its start with "#" to length 8, and unshifts it back into the array.
// 	• Input: ["  Title ", "Body"]
// 	• Expected Output: ["###Title", "Body"]
// 44. File Sorter: Write a function that takes a filename and two arrays (images and docs). If the lowercased filename endsWith(".pdf"), push it to docs; if it endsWith(".png"), push it to images.
// 	• Input: "  Report.PDF  ", [], []
// 	• Expected Output: images: [], docs: ["Report.PDF"] (or trimmed version)
// 45. Splice & Concat: Write a function that takes an array of 3 strings, removes the middle element using splice(), and returns it concatenated with " - REMOVED".
// 	• Input: ["keep1", "deleteMe", "keep2"]
// 	• Expected Output: "deleteMe - REMOVED"
// 46. Password Strength Array: Write a function that takes a password string and an empty array. Push true or false into the array for three checks: startsWith("A"), endsWith("9"), and includes("#").
// 	• Input: "Alpha#9", []
// 	• Expected Output: [true, true, true]
// 47. First & Last Code Array: Write a function that takes a trimmed string, gets the charCodeAt() of its first character and last character (using at(-1)), and pushes both numbers into an array.
// 	• Input: "  Hi  "
// 	• Expected Output: [72, 105]
// 48. Censored Word Replacer (via Splice): Write a function that takes an array of 3 words. If the second word (index 1) lowercased includes("bad"), use splice() to replace it with "*".repeat(4).
// 	• Input: ["good", "VeryBADword", "nice"]
// 	• Expected Output: ["good", "****", "nice"]
// 49. Log Entry Builder: Write a function that takes an array of logs, shifts the oldest log, trims its end, uppercases it, and pushes it to the back of the array.
// 	• Input: ["log1   ", "log2", "log3"]
// 	• Expected Output: ["log2", "log3", "LOG1"]
// 50. Master Chaining Formatter: Write a function that takes an array with one messy string, pops it, trims both ends, converts to lowercase, pads the end with "." to 15 characters, concatenates "DONE", and unshifts it back into the array.
// 	• Input: ["   Processing   "]
// 	• Expected Output: ["processing.....DONE"]
  