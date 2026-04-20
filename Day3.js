// Exercise: Level 1

// 1.
let myArray = [];

//2.
let numbers = [10,20,30,40,50,60];

//3.
let length = numbers.length;
console.log(length);        //6

//4.
let first = numbers[0];
let middle = numbers[Math.floor(numbers.length / 2)];
let last = numbers[numbers.length - 1];

console.log("First:", first);
console.log("Middle:", middle);
console.log("Last:", last);

//5.
let mixedDataTypes = ["Hello", 25, true, null, undefined, { name: "John" },[1, 2, 3]];
let length1 = mixedDataTypes.length;

console.log("Array:", mixedDataTypes);
console.log("Length:", length1);

//6.
let itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

//7.
console.log(itCompanies);

//8.
console.log(itCompanies.length);

//9.
let first1 = itCompanies[0];
let middle1 = itCompanies[Math.floor(itCompanies.length / 2)];
let last1 = itCompanies[itCompanies.length - 1];

console.log("First:", first1);
console.log("Middle:", middle1);
console.log("Last:", last1);

// 10.
for (let company of itCompanies) {
  console.log(company);
}

//11.
for (let company of itCompanies) {
  console.log(company.toUpperCase());
}

//12.
console.log(itCompanies.join(", ") + " are big IT companies.");

// 13.
let checkCompany = "Google";
if (itCompanies.includes(checkCompany)) {
  console.log(checkCompany);
} else {
  console.log("Company is not found");
}

// 14.
let companiesWithMultipleO = [];
for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    companiesWithMultipleO.push(company);
  }
}
console.log("More than one 'o':", companiesWithMultipleO);

// 15. 
console.log("Sorted:", itCompanies.sort());

// 16.
console.log("Reversed:", itCompanies.reverse());

// 17. 
console.log("First 3:", itCompanies.slice(0, 3));

// 18. 
console.log("Last 3:", itCompanies.slice(-3));

// 19.
let midIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  console.log("Middle:", itCompanies.slice(midIndex - 1, midIndex + 1));
} else {
  console.log("Middle:", itCompanies[midIndex]);
}

// 20. 
itCompanies.shift();
console.log(itCompanies);

// 21. 
let mid = Math.floor(itCompanies.length / 2);
itCompanies.splice(mid, 1);
console.log(itCompanies);

// 22. 
itCompanies.pop();
console.log(itCompanies);

// 23. 
itCompanies = [];
console.log(itCompanies);


// Exercise: Level 2

// 1.
import { countries1 } from "./countries.js";
import { webTechs } from "./web_techs.js";

console.log(countries1);
console.log(webTechs);

// 2.
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Remove punctuation using regex
let cleanText = text.replace(/[.,]/g, '');

// Convert to array
let words = cleanText.split(' ');

console.log(words);
console.log(words.length);

// 3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at the beginning if not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic
const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

// 4.
if (countries1.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries1.push('Ethiopia');
  console.log(countries1);
}

//5.
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}


// 6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);


// Exercise: Level 3

// 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array
const sortedAges = ages.sort((a, b) => a - b);
console.log('Sorted:', sortedAges);

//Find min and max
const min = sortedAges[0];
const max = sortedAges[sortedAges.length - 1];
console.log('Min:', min);
console.log('Max:', max);

//Find median
let median;
const mid1 = Math.floor(sortedAges.length / 2);

if (sortedAges.length % 2 === 0) {
  median = (sortedAges[mid1 - 1] + sortedAges[mid1]) / 2;
} else {
  median = sortedAges[mid1];
}
console.log('Median:', median);

//Find average
const sum = sortedAges.reduce((acc, age) => acc + age, 0);
const average = sum / sortedAges.length;
console.log('Average:', average);

//Find range
const range = max - min;
console.log('Range:', range);

//Compare (min - average) and (max - average)
const minDiff = Math.abs(min - average);
const maxDiff = Math.abs(max - average);

console.log('Min - Average (abs):', minDiff);
console.log('Max - Average (abs):', maxDiff);

// 1.
import { countries } from "./countries.js";
const firstTen = countries.slice(0, 10);
console.log('First 10 countries:', firstTen);

// 2. 
const middleIndex = Math.floor(countries.length / 2);

if (countries.length % 2 === 0) {
  console.log('Middle countries:', countries[middleIndex - 1], countries[middleIndex]);
} else {
  console.log('Middle country:', countries[middleIndex]);
}

// 3. 
let firstHalf, secondHalf;

if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, middleIndex);
  secondHalf = countries.slice(middleIndex);
} else {
  firstHalf = countries.slice(0, middleIndex + 1);
  secondHalf = countries.slice(middleIndex + 1);
}

console.log('First half:', firstHalf);
console.log('Second half:', secondHalf);

// Exercises: Level 4

// 1.
//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//do..while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

// 2.
//for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//while loop
let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

//do...while loop
let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);

// 3.
//for
let n = 1000;
for(let i = 0; i<=n; i++){
  console.log(i);
}

//4.
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i));
}

// 5.
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//6.
console.log('i\ti^2\ti^3');

for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i * i}\t${i * i * i}`);
}

// 7.
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 8.
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 9.
for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// 10.
let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log('The sum of all numbers from 0 to 100 is',sum); // 5050

//11.
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`);

// 12.
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log([evenSum, oddSum]); // [2550, 2500]

//13.
let randomNumbers = [];

for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);

// 14.
let uniqueNumbers = [];

while (uniqueNumbers.length < 5) {
  let num = Math.floor(Math.random() * 100);

  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
}

console.log(uniqueNumbers);

//15.
let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let id = '';

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  id += chars[randomIndex];
}

console.log(id);

// Exercises: Level 5

// 1.
let length = prompt("How much length ID you want?"); 
let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let id = '';

for (let i = 0; i < length; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  id += chars[randomIndex];
}

console.log(id);


// 2.
const hexChars = "0123456789abcdef";
let color = '#';
for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * 16);
  color += hexChars[randomIndex]; 
}
console.log(color);

// 3.
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let rgbColor = `rgb(${r}, ${g}, ${b})`;

console.log(rgbColor);

// 4.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
]
const upperCountries = countries.map(country => country.toUpperCase());
console.log(upperCountries);

// 5.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 6.
const result = countries.map(country => {
  const formattedName = country.charAt(0) + country.slice(1).toLowerCase();
  const code = country.slice(0, 3);
  const length = country.length;

  return [formattedName, code, length];
});

console.log(result);

// 7.
const countriesWithLand = countries.filter(country =>
  country.toLowerCase().includes("land")
);

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log("All these countries are without land");
}

// 8.
const countriesEndingWithIA = countries.filter(country =>
  country.toLowerCase().endsWith("ia")
);

if (countriesEndingWithIA.length > 0) {
  console.log(countriesEndingWithIA);
} else {
  console.log("These are countries ends without ia");
}

// 9.
const longestCountry = countries.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
});

console.log(longestCountry);

// 10.
const fiveLetterCountries = countries.filter(country => country.length === 5);

console.log(fiveLetterCountries);

// 11.
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const longestWord = webTechs.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
});

console.log(longestWord);

// 12.

const result = webTechs.map(tech => [tech, tech.length]);

console.log(JSON.stringify(result));

// 13.
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const acronym = mernStack.map(tech => tech[0]).join('');
console.log(acronym);

// 14.
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const tech of techs) {
  console.log(tech);
}

// 15.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversed = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversed.push(fruits[i]);
}

console.log(reversed);

// 16.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j].toUpperCase());
  }
}


// Exercises: Level 6

// 1.
const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
]
const copyCountries = countries2.slice();
console.log(copyCountries);

// 2.
const copyCountries1 = [...countries2];

// Sort the copied array
const sortedCountries = copyCountries1.sort();

console.log(sortedCountries);

// 3.
const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();

console.log(sortedWebTechs);
console.log(sortedMernStack);

// 4.
import { countries } from "./countries.js";
const landcountries = countries.filter(country =>
  country.toLowerCase().includes('land')
);

console.log(landcountries);

// 5.
const longestCountry = countries.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
});

console.log(longestCountry);

// 7.
const fourCharCountries = countries.filter(country => country.length === 4);

console.log(fourCharCountries);

// 8.
const multiWordCountries = countries.filter(country =>
  country.includes(" ")
);

console.log(multiWordCountries);

// 9.
const reversedArray = [...countries]
  .reverse()
  .map(country => country.toUpperCase());

console.log(reversedArray);





