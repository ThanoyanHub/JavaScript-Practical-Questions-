
# 💻 Day 2

### Exercises: Level 1

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
```js
let firstName = "Premananthan";
let lastName = "Thanoyan";
let country = "Sri Lanka";
let city = "Kilinochchi";
let age = 20;
let isMarried = false;
let year = 2006;

console.log(typeof firstName);  
console.log(typeof lastName);   
console.log(typeof country);   
console.log(typeof city);      
console.log(typeof age);        
console.log(typeof isMarried); 
console.log(typeof year);      

```
2. Check if type of '10' is equal to 10
```js
console.log(typeof '10' == typeof 10); 
```
3. Check if parseInt('9.8') is equal to 10
```js
console.log(parseInt('9.8') == 10); 
```
4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   ```js
   console.log(1);        
   console.log("hello");  
   console.log(true);     
   ```
   2. Write three JavaScript statement which provide falsy value.
   ```js
   console.log(0);        
   console.log("");       
   console.log(false);    
   ```

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   ```
   true
   ```
   ```js
   console.log(4 > 3);    
   ```
   2. 4 >= 3
   ```
   true
   ```
   ```js
   console.log(4 >= 3);  
   ```
   3. 4 < 3
   ```
   false
   ```
   ```js
   console.log(4 < 3); 
   ```
   4. 4 <= 3
   ```
   false
   ```
   ```js
   console.log(4 <= 3);   
   ```
   5. 4 == 4
   ```
   true
   ```
   ```js
   console.log(4 == 4);  
   ```
   6. 4 === 4
   ```
   true
   ```
   ```js
   console.log(4 === 4); 
   ```
   7. 4 != 4
   ```
   false
   ```
   ```js
   console.log(4 != 4);  
   ```
   8. 4 !== 4
   ```
   false
   ```
   ```js
   console.log(4 !== 4); 
   ```
   9. 4 != '4'
   ```
   false
   ```
   ```js
   console.log(4 != '4'); 
   ```
   10. 4 == '4'
   ```
   true
   ```
   ```js
   console.log(4 == '4'); 
   ```
   11. 4 === '4'
   ```
   false
   ```
   ```js
   console.log(4 === '4');
   ```
   12. Find the length of python and jargon and make a falsy comparison statement.
   ```js
   let word1 = "python";
   let word2 = "jargon";

   console.log(word1.length); 
   console.log(word2.length); 

   console.log(word1.length !== word2.length); 
   ```

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   ```
   true
   ```
   ```js
   console.log(4 > 3 && 10 < 12);  
   ```
   2. 4 > 3 && 10 > 12
   ```
   false
   ```
   ```js
   console.log(4 > 3 && 10 > 12);  
   ```
   3. 4 > 3 || 10 < 12
   ```
   true
   ```
   ```js
   console.log(4 > 3 || 10 < 12); 
   ```
   4. 4 > 3 || 10 > 12
   ```
   true
   ```
   ```js
   console.log(4 > 3 || 10 > 12);  
   ```
   5. !(4 > 3)
   ```
   false
   ```
   ```js
   console.log(!(4 > 3));         
   ```
   6. !(4 < 3)
   ```
   true
   ```
   ```js
   console.log(!(4 < 3));          
   ```
   7. !(false)
   ```
   true
   ```
   ```js
   console.log(!(false));       
   ```
   8. !(4 > 3 && 10 < 12)
   ```
   false
   ```
   ```js
   console.log(!(4 > 3 && 10 < 12));
   ```
   9. !(4 > 3 && 10 > 12)
   ```
   true
   ```
   ```js
   console.log(!(4 > 3 && 10 > 12));
   ```
   10. !(4 === '4')
   ```
   true
   ```
   ```js
   console.log(!(4 === '4'));    
   ```
   11. There is no 'on' in both dragon and python
   ```
   I can't understand the question
   ```

7. Use the Date object to do the following activities
   1. What is the year today?
   ```js
   const now = new Date();
   const year = now.getFullYear();
   console.log(year);
   ```
   2. What is the month today as a number?
   ```js
   const now = new Date();
   const month = now.getMonth() + 1; 
   console.log(month);
   ```
   3. What is the date today?
   ```js
   const now = new Date();
   const date = now.getDate();
   console.log("Date:", date);   
   ```
   4. What is the day today as a number?
   ```js
   const now = new Date();
   const day = now.getDay();
   console.log("Day:", day);
   ```
   5. What is the hours now?
   ```js
   const now = new Date();
   const hours = now.getHours();
   console.log("Hours:", hours);
   ```
   6. What is the minutes now?
   ```js
   const now = new Date();
   const minutes = now.getMinutes();
   console.log("Minutes:", minutes);
   ```
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
   ```js
   const now = new Date();
   const secondsSince1970 = Math.floor(now.getTime() / 1000);
   console.log(secondsSince1970);
   ```

### Exercises: Level 2

1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```
   ```js
   // Prompt user input
   let base = prompt("Enter base:");
   let height = prompt("Enter height:");

   // Convert inputs to numbers
   base = Number(base);
   height = Number(height);

   // Calculate area
   let area = 0.5 * base * height;

   // Display result
   console.log(area);
   ```

2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```
   ```js
   // Prompt user input
   let a = prompt("Enter side a:");
   let b = prompt("Enter side b:");
   let c = prompt("Enter side c:");

   // Convert inputs to numbers
   a = Number(a);
   b = Number(b);
   c = Number(c);

   // Calculate perimeter
   let perimeter = a + b + c;

   // Display result
   console.log(perimeter);

   ```

3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
```js
let length = prompt("Enter length:");
let width = prompt("Enter width:");

// Convert inputs to numbers
length = Number(length);
width = Number(width);

// Calculate area and perimeter
let area = length * width;
let perimeter = 2 * (length + width);

// Display results
console.log("Area = " + area);
console.log("Perimeter = " + perimeter);
```
4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
```js
let radius = prompt("Enter the radius of the circle:");
radius = Number(radius);

const pi = 22/7;

let area = pi * radius * radius;
let circumference = 2 * pi * radius;

console.log("Area = " + area);      
console.log("Circumference = " + circumference);
```
5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
```js
let m = 2;
console.log("Slope = " + m);    

// y-intercept (when x = 0)
let x = 0;
let m = 2;
let c = -2;
console.log( "y = " + (m*x+c));                           

// x-intercept (when y = 0)
let y = 0;
let m = 2;
let c = -2;
console.log( "x = " + (y-(m*x+c)));       
```
6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
```js
let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;

let slope = (y2 - y1) / (x2 - x1);
console.log("Slope = " + slope);           
```
7. Compare the slope of above two questions.
```js
let slope1 = 2;
let slope2 = 2;

if (slope1 === slope2) {
    console.log("Both slopes are equal");    
} else {
    console.log("Slopes are different");
}
```
8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
```js
for (let x = -5; x <= 1; x++) {
    let y = x * x + 6 * x + 9;

    if (y === 0) {
        console.log("y is 0 when x = ", x);        
    }
}
```
9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```
```js
let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");

hours = Number(hours);
rate = Number(rate);

let pay = hours * rate;

console.log("Your weekly earning is " + pay);
```

10. If the length of your name is greater than 7 say, your name is long else say your name is short.
```js
// Get user's name
let name = prompt("Enter your name:");

// Check length
if (name.length > 7) {
    console.log("Your name is long");
} else {
    console.log("Your name is short");
}
```
11. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'kamal'
    let lastName = 'ranvir'
    ```

    ```sh
    Your first name, kamal is longer than your family name, ranvir
    ```

```js
let firstName = prompt("Enter your first name");
let familyName = prompt("Enter your family name");

if (firstName.length > familyName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${familyName}`);
} else if (firstName.length < familyName.length) {
    console.log(`Your family name, ${familyName} is longer than your first name, ${firstName}`);
} else {
    console.log(`Your first name and family name are of equal length`);
}
```

12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 25
   let yourAge = 25
   ```

   ```sh
   I am 50 years older than you.
   ```
```js
let myAge = 21;
let yourAge = 15;
let difference = myAge - yourAge;
console.log(`I am ${difference} years older than you.`); 
```
13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

```js
// Get birth year from user
let birthYear = prompt("Enter birth year:");

// Convert to number
birthYear = Number(birthYear);

// Get current year
let currentYear = new Date().getFullYear();

// Calculate age
let age = currentYear - birthYear;

// Check eligibility
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive`);
} else {
    let yearsLeft = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${yearsLeft} years.`);
}
```

14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```
```js
// Get number of years from user
let years = prompt("Enter number of years you live:");

// Convert to number
years = Number(years);

// Calculate seconds in one year
let secondsInYear = 365 * 24 * 60 * 60;

// Calculate total seconds lived
let secondsLived = years * secondsInYear;

// Display result
console.log(`You lived ${secondsLived} seconds.`);
```
15. Create a human readable time format using the Date time object
```js
// Get current date and time
let now = new Date();

// Extract values
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');
```
   1. YYYY-MM-DD HH:mm
   ```js
   let format1 = `${year}-${month}-${date} ${hours}:${minutes}`;
   console.log(format1);
   ```
   2. DD-MM-YYYY HH:mm
   ```js
   let format2 = `${date}-${month}-${year} ${hours}:${minutes}`;
   console.log(format2);
   ```
   3. DD/MM/YYYY HH:mm
   ```js
   let format3 = `${date}/${month}/${year} ${hours}:${minutes}`;
   console.log(format3);
   ```

### Exercises: Level 3

1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
   ```js
   // Get current date and time
   let now = new Date();

   // Extract values
   let year = now.getFullYear();
   let month = String(now.getMonth() + 1).padStart(2, '0');
   let date = String(now.getDate()).padStart(2, '0');
   let hours = String(now.getHours()).padStart(2, '0');
   let minutes = String(now.getMinutes()).padStart(2, '0');

   // Format: YYYY-MM-DD HH:mm
   let formattedTime = `${year}-${month}-${date} ${hours}:${minutes}`;

   // Display result
   console.log(formattedTime);
   ```


   
### Exercises: Level 4

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```
   ```js
   // Get user input
   let age = prompt("Enter your age:");

   // Convert to number
   age = Number(age);

   // Check condition
   if (age >= 18) {
      console.log("You are old enough to drive.");
   } else {
      let yearsLeft = 18 - age;
      console.log(`You are left with ${yearsLeft} years to drive.`);
   }
   ```

2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```
   ```js
   // My age (fixed value)
   let myAge = 21;

   // Get user's age
   let yourAge = prompt("Enter your age:");
   yourAge = Number(yourAge);

   // Compare ages
   if (yourAge > myAge) {
      let diff = yourAge - myAge;
      console.log(`You are ${diff} years older than me.`);
   } else if (yourAge < myAge) {
      let diff = myAge - yourAge;
      console.log(`I am ${diff} years older than you.`);
   } else {
      console.log("We are the same age.");
   }
   ```

3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    - using if else
    - ternary operator.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```
    ```js
    //if ...else
   let a = 4;
   let b = 3;

   if (a > b) {
      console.log(`${a} is greater than ${b}`);      
   } else {
      console.log(`${a} is less than ${b}`);
   }
    ```
    ```js
   //ternary
   let a = 4;
   let b = 3;

   let result = (a > b) ? `${a} is greater than ${b}` : `${a} is less than ${b}`;

   console.log(result);   
    ```

4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
    ```
    ```js
   // Get input from user
   let number = prompt("Enter a number:");

   // Convert to number
   number = Number(number);

   // Check even or odd
   if (number % 2 === 0) {
      console.log(`${number} is an even number`);
   } else {
      console.log(`${number} is an odd number`);
   }
    ```

### Exercises: Level 5

1. Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
   ```js
   // Get score from user
   let score = prompt("Enter your score:");

   // Convert to number
   score = Number(score);

   // Use switch(true) trick for range checking
   let grade;

   switch (true) {
      case (score >= 80 && score <= 100):
         grade = "A";
         break;

      case (score >= 70 && score <= 79):
         grade = "B";
         break;

      case (score >= 60 && score <= 69):
         grade = "C";
         break;

      case (score >= 50 && score <= 59):
         grade = "D";
         break;

      case (score >= 0 && score <= 49):
         grade = "F";
         break;

      default:
         grade = "Invalid score";
   }

   console.log(`Your grade is ${grade}`);

   ```
2. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
   ```js
   // Get month input from user
   let month = prompt("Enter a month:");

   // Convert to lowercase for consistency
   month = month.toLowerCase();

   let season;

   switch (month) {
      case "september":
      case "october":
      case "november":
         season = "Autumn";
         break;

      case "december":
      case "january":
      case "february":
         season = "Winter";
         break;

      case "march":
      case "april":
      case "may":
         season = "Spring";
         break;

      case "june":
      case "july":
      case "august":
         season = "Summer";
         break;

      default:
         season = "Invalid month";
   }

   console.log(`The season is ${season}`);

   ```
3. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
```
   ```js
   // Get day input from user
   let day = prompt("What is the day today?");

   // Normalize input (fix case issues like saturDaY)
   day = day.toLowerCase();

   // Capitalize first letter for output
   let formattedDay = day.charAt(0).toUpperCase() + day.slice(1);

   let result;

   switch (day) {
      case "saturday":
      case "sunday":
         result = `${formattedDay} is a weekend.`;
         break;

      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
         result = `${formattedDay} is a working day.`;
         break;

      default:
         result = "Invalid day entered.";
   }

   console.log(result);

   ```

### Exercises: Level 6

1. Write a program which tells the number of days in a month.

  ```sh
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
  ```
  ```js
   // Get month input
   let month = prompt("Enter a month:");

   // Normalize input
   month = month.toLowerCase();

   // Format month for output (capitalize first letter)
   let formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

   let days;

   switch (month) {
      case "january":
      case "march":
      case "may":
      case "july":
      case "august":
      case "october":
      case "december":
         days = 31;
         break;

      case "april":
      case "june":
      case "september":
      case "november":
         days = 30;
         break;

      case "february":
         days = 28;
         break;

      default:
         days = null;
   }

   // Output result
   if (days) {
      console.log(`${formattedMonth} has ${days} days.`);
   } else {
      console.log("Invalid month entered.");
   }

  ```

2. Write a program which tells the number of days in a month, now consider leap year.
```js
// Get month input
let month = prompt("Enter a month:");

// Get year input (needed for leap year check)
let year = Number(prompt("Enter a year:"));

// Normalize input
month = month.toLowerCase();

// Format month for output
let formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

let days;

// Check leap year
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        days = 31;
        break;

    case "april":
    case "june":
    case "september":
    case "november":
        days = 30;
        break;

    case "february":
        days = isLeapYear ? 29 : 28;
        break;

    default:
        days = null;
}

// Output result
if (days) {
    console.log(`${formattedMonth} has ${days} days.`);
} else {
    console.log("Invalid month entered.");
}
```
