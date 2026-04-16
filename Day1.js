//Exercises: Level 1

// 1. 
// comments can make code readable

// 2.
//_Welcome to learn Javascript_

// 3.
// _comments can make code readable, easy to reuse_
//    _and informative_

// 4.
let myString = "Hello, world!"; 
let myBoolean = true;           
let myUndefined = undefined;    
let myNull = null;            

console.log(myString, myBoolean, myUndefined, myNull);

// 5.
let string = "Hello, world!";
let boolean = true;
let Undefined = undefined;
let Null = null;

console.log(typeof string);    
console.log(typeof boolean);  
console.log(typeof Undefined);
console.log(typeof Null);

// 6.
let firstName;
let lastName;
let country;
let city;

// 7.
let name="Thanoyan";
let age=20;
let address="kilinochchi";
let school="KMV";

// 8.
let firstName1 = "Thanoyan";
let lastName1 = "Premananthan";
let maritalStatus = "Single";
let country1 = "Srilanka";
let age1 = 20;

// 9.
let firstName2 = "Thanoyan", lastName2 = "Premananthan", maritalStatus2 = "Single", country2 = "SriLanka", age2 = 20;

//10.
let myAge = 25;
let yourAge = 30;

console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");



//  Exercises: Level 2

// 1. 
let challenge = 'learn Javascript';

// 2.
console.log(challenge);

// 3.
console.log(challenge.length);

// 4.
console.log(challenge.toUpperCase());

// 5.
console.log(challenge.toLowerCase());

// 6.
let firstWord = challenge.substring(0, 5);

console.log(firstWord);

// 7.
let Challenge = '30 Days Of JavaScript';

let phrase = Challenge.substring(11);

console.log("learn",phrase);

// 8.
console.log(challenge.includes('Script'));

// 9.
console.log(challenge.split('')); 

// 10.
let splitArray = challenge.split(' ');

console.log(splitArray); 

// 11.
let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let companiesArray = techCompanies.split(', ');

console.log(companiesArray);

// 12.
let newChallenge = challenge.replace('learn Javascript', '30 Days Of Python');

console.log(newChallenge); 

// 13.
console.log(challenge.charAt(15)); 

// 14.
console.log(challenge.charCodeAt(6)); 

// 15.
console.log(challenge.indexOf('a')); 

// 16.
console.log(challenge.lastIndexOf('a')); 

// 17.
let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because')); 

// 18.
console.log(sentence.lastIndexOf('because')); 

// 19.
console.log(sentence.search('because')); 

// 20.
let cleanChallenge = challenge.trim();

console.log(cleanChallenge); 

// 21.
console.log(challenge.startsWith('learn')); 

// 22.
console.log(challenge.endsWith('Javascript')); 

// 23.
let result = challenge.match(/a/g);

console.log(result); 

// 24.
let part1 = '30 Days of';
let part2 = ' JavaScript';

let fullString = part1.concat(part2);

console.log(fullString); 

// 25.
let repeatedChallenge = challenge.repeat(2);

console.log(repeatedChallenge); 



// Exercise: Level 3

// 1.
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

// 2.
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// 3.
console.log(typeof '10' === 10); 

// 4.
let num = parseFloat('9.8');

console.log(num === 10); 

// 5.
let word1 = 'python';
let word2 = 'jargon';

let results = word1.includes('on') && word2.includes('on');

console.log(results); 

// 6.
let sentence2 = 'I hope this course is not full of jargon';

console.log(sentence2.includes('jargon')); 

// 7.
const randomNumber = Math.floor(Math.random() * 101);

console.log(randomNumber);

// 8.
const randomNumber2 = Math.floor(Math.random() * 51) + 50;

console.log(randomNumber2);

// 9.
const randomNumber3 = Math.floor(Math.random() * 256);

console.log(randomNumber3);

// 10.
let string1 = 'JavaScript';

let randomIndex = Math.floor(Math.random() * string1.length);

let randomChar = string1[randomIndex];

console.log(`Character at index ${randomIndex}: ${randomChar}`);


// 11.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 12.
let sentence3 = 'You cannot end a sentence with because because because is a conjunction';

let result3 = sentence3.substr(31, 23);

console.log(result3); 



// Exercises: Level 4

// 1.
let sentence4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

let count = sentence4.match(/love/gi).length;

console.log(count); 


// 2.
let sentence5 = 'You cannot end a sentence with because because because is a conjunction';

let matches = sentence5.match(/because/g);

let count2 = matches.length;

console.log(count2); 

// 3.
const sentence6 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanSentence = sentence6.replace(/[^a-zA-Z0-9 ]/g, '');

console.log(cleanSentence);

// 4.
const text = 'He earns 50000 Rs from salary per month, 10000 Rs annual bonus, 15000 Rs online courses per month.';

const amounts = text.match(/\d+/g);

const monthlySalary = Number(amounts[0]);
const annualBonus = Number(amounts[1]);
const monthlyCourses = Number(amounts[2]);

const totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);

console.log(`Total Annual Income: ${totalAnnualIncome} Rs`);
