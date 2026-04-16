# 💻 Day 1

### Exercises: Level 1

1. Write a single line comment which says, _comments can make code readable_
Answer
// comments can make code readable


2. Write another single comment which says, _Welcome to learn Javascript_
Answer
// _Welcome to learn Javascript_


3. Write a multiline comment which says, _comments can make code readable, easy to reuse_
   _and informative_
Answer
  // _comments can make code readable, easy to reuse_
  //_and informative_

4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
Answer
let myString = "Hello, world!"; 
let myBoolean = true;           
let myUndefined = undefined;    
let myNull = null;            

console.log(myString, myBoolean, myUndefined, myNull);

5. Create datatypes.js file and use the JavaScript **_typeof_** operator to check different data types. Check the data type of each variable
Answer
let string = "Hello, world!";
let boolean = true;
let Undefined = undefined;
let Null = null;

console.log(typeof string);    
console.log(typeof boolean);  
console.log(typeof Undefined);
console.log(typeof Null);

6. Declare four variables without assigning values
Answer
let firstName;
let lastName;
let country;
let city;

7. Declare four variables with assigned values
Answer
let name="Thanoyan";
let age=20;
let adress="kilinochchi";
let school="KMV";


8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
Answer
let firstName = "Thanoyan";
let lastName = "Premananthan";
let maritalStatus = "Single";
let country = "Srilanka";
let age = 20;

9. Declare variables to store your first name, last name, marital status, country and age in a single line
Answer
let firstName = "Gemini", lastName = "Flash", maritalStatus = "Single", country = "The Cloud", age = 3;

10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.

```sh
I am 25 years old.
You are 30 years old.
```
Answer
let myAge = 25;
let yourAge = 30;

console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");


### Exercises: Level 2

1. Declare a variable named challenge and assign it to an initial value **'learn Javascript'**.
Answer
let challenge = 'learn Javascript';

2. Print the string on the browser console using __console.log()__
Answer
let challenge = 'learn Javascript';

console.log(challenge);

3. Print the __length__ of the string on the browser console using _console.log()_
Answer
let challenge = 'learn Javascript';

console.log(challenge.length);

4. Change all the string characters to capital letters using __toUpperCase()__ method
Answer
let challenge = 'learn Javascript';
console.log(challenge.toUpperCase());

5. Change all the string characters to lowercase letters using __toLowerCase()__ method
Answer
let challenge = 'learn Javascript';
console.log(challenge.toLowerCase());

6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
Answer
let challenge = 'learn Javascript';
let firstWord = challenge.substring(0, 5);

console.log(firstWord);

7. Slice out the phrase *Days Of JavaScript* from *learn Javascript*.
Answer
let Challenge = '30 Days Of JavaScript';

let phrase = Challenge.substring(11);

console.log(phrase);

8. Check if the string contains a word __Script__ using __includes()__ method
Answer
let challenge = 'learn Javascript';

console.log(challenge.includes('Script'));

9. Split the __string__ into an __array__ using __split()__ method
Answer
let challenge = 'learn Javascript';
console.log(challenge.split(' ')); 


10. Split the string learn Javascript at the space using __split()__ method
Answer
let challenge = 'learn Javascript';

let splitArray = challenge.split(' ');

console.log(splitArray); 

11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
Answer
let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let companiesArray = techCompanies.split(', ');

console.log(companiesArray);

12. Change learn Javascript to 30 Days Of Python using __replace()__ method.
Answer
let challenge = 'learn Javascript';

let newChallenge = challenge.replace('learn Javascript', '30 Days Of Python');

console.log(newChallenge); 

13. What is character at index 15 in 'learn Javascript' string? Use __charAt()__ method.
Answer
let challenge = 'learn Javascript';

console.log(challenge.charAt(15)); 

14. What is the character code of J in 'learn Javascript' string using __charCodeAt()__
Answer
let challenge = 'learn Javascript';

console.log(challenge.charCodeAt(6)); 


15. Use __indexOf__ to determine the position of the first occurrence of __a__ in learn Javascript
Answer
let challenge = 'learn Javascript';

console.log(challenge.indexOf('a')); 


16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in learn Javascript.
Answer
let challenge = 'learn Javascript';

console.log(challenge.lastIndexOf('a')); 

17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
Answer
let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because')); 


18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
Answer
let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.lastIndexOf('because')); 


19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
Answer
let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.search('because')); 

20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' learn Javascript '.
Answer
let challenge = ' learn Javascript ';

let cleanChallenge = challenge.trim();

console.log(cleanChallenge); 

21. Use __startsWith()__ method with the string *learn Javascript* and make the result true
Answer
let challenge = 'learn Javascript';

console.log(challenge.startsWith('learn')); 


22. Use __endsWith()__ method with the string *learn Javascript* and make the result true
Answer
let challenge = 'learn Javascript';

console.log(challenge.endsWith('Javascript')); 


23. Use __match()__ method to find all the __a__’s in learn Javascript
Answer
let challenge = 'learn Javascript';

let result = challenge.match(/a/g);

console.log(result); 

24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, 'learn Javascript'
Answer
let part1 = '30 Days of';
let part2 = ' JavaScript'; 

let fullString = part1.concat(part2);

console.log(fullString); 

25. Use __repeat()__ method to print learn Javascript 2 times
Answer
let challenge = 'learn Javascript';

let repeatedChallenge = challenge.repeat(2);

console.log(repeatedChallenge); 


### Exercise: Level 3

1. Using console.log() print out the following statement:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```
Answer
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

2. Using console.log() print out the following quote by Mother Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```
Answer
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
Answer
console.log(typeof '10' === 10); 

4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
Answer
let num = parseFloat('9.8');

console.log(num === 10); 

5. Check if 'on' is found in both python and jargon
Answer
let word1 = 'python';
let word2 = 'jargon';

let result = word1.includes('on') && word2.includes('on');

console.log(result); 


6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
Answer
let sentence2 = 'I hope this course is not full of jargon';

console.log(sentence2.includes('jargon')); 


7. Generate a random number between 0 and 100 inclusively.
Answer
const randomNumber = Math.floor(Math.random() * 101);

console.log(randomNumber);

8. Generate a random number between 50 and 100 inclusively.
Answer
// Generates a random number between 50 and 100
const randomNumber2 = Math.floor(Math.random() * 51) + 50;

console.log(randomNumber2);

9. Generate a random number between 0 and 255 inclusively.
Answer
// Generates a random number between 0 and 255
const randomNumber3 = Math.floor(Math.random() * 256);

console.log(randomNumber3);

10. Access the 'JavaScript' string characters using a random number.
Answer
let string1 = 'JavaScript';

let randomIndex = Math.floor(Math.random() * string1.length);

let randomChar = string1[randomIndex];

console.log(`Character at index ${randomIndex}: ${randomChar}`);


11. Use console.log() and escape characters to print the following pattern.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

Answer
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

### Exercises: Level 4

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.
Answer
let sentence4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

let count = sentence4.match(/love/gi).length;

console.log(count); 

2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

Answer
const sentence6 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanSentence = sentence6.replace(/[^a-zA-Z0-9 ]/g, '');

console.log(cleanSentence);

4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 50000 Rs from salary per month, 10000 Rs annual bonus, 15000 Rs online courses per month.'
Answer

const text = 'He earns 50000 Rs from salary per month, 10000 Rs annual bonus, 15000 Rs online courses per month.';


const amounts = text.match(/\d+/g);


const monthlySalary = Number(amounts[0]);
const annualBonus = Number(amounts[1]);
const monthlyCourses = Number(amounts[2]);


const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);

console.log(`Total Annual Income: ${totalAnnualIncome} Rs`);