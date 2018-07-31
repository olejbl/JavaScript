/*************************
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark
*/

/*************************
* Variable mutation and type coertion
*/

/***********
// type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? '  + isMarried);

// variable mutation

age = 'twentyeight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? '  + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


*/


/***********
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;


console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/*************
* Operator precedence
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);


//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);


//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/**********************************
*
* CODING CHALLENGE 1
*/

/*

var massMark = 80; //kg
var massJohn = 70; //kg 

var heightMark = 1.93; //meters
var heightJohn = 1.85; //meters

var BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);
var isMarkHigher = BMIMark > BMIJohn;
console.log(isMarkHigher);
console.log('Is Marks´s BMI higher than John´s? ' + isMarkHigher);

*/



/***********************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');    
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if(isMarried) {
    console.log(firstName + ' is married!');    
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var massMark = 80; //kg
var massJohn = 70; //kg 

var heightMark = 1.93; //meters
var heightJohn = 1.85; //meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

//var isMarkHigher = BMIMark > BMIJohn;
//console.log('Is Marks´s BMI higher than John´s? ' + isMarkHigher);

*/

/***************@
* Boolean Logic
*/
/*

var firstName = 'John';
var age = 20;

if (age <13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { 
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
     console.log(firstName + ' is a young man.');      
} else {
    console.log(firstName + ' is a man.');
}

*/



/**************** 
* The Ternary Operator and Switch Statements / conditional operator
*/

var firstName = 'John';
var age = 14;


// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer'; 
} else {
    var drink = 'juice';
}

*/

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
            console.log(firstName + ' teaches kids how to code.');
            break
    case 'driver':
            console.log(firstName + ' drives an uber in Lisbon.');
            break
    case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break   
    default:
            console.log(firstName + ' does something else.');
        
}

age = 14;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
    
}

/*

var firstName = 'John';
var age = 20;

if (age <13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { 
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
     console.log(firstName + ' is a young man.');      
} else {
    console.log(firstName + ' is a man.');
}

*/


















































