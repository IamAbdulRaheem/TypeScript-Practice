"use strict";
/********************
    * FUNCTIONS *
 ********************/
Object.defineProperty(exports, "__esModule", { value: true });
// Functions : Functions are building block of a program
// Named Function
function sum(num1, num2) {
    return num1 + num2; // this function will return the sum of num1 and num2
}
// Logging the result
console.log(sum(10, 5)); // 15
// Anonymous Functions
let area = function (length, width) {
    return length * width;
};
console.log(area(10, 5)); // 50
// Anonymous Functions with explict casting
let greet = function (message, name) {
    return `${name} says- ${message}`;
};
console.log(greet("Salam!", "Abdul Raheem"));
// Arrow Functions
let arrowFunction = (name, message) => `${name} is written inside ${message}.`; // this is short hand property to return a value in arrow functions
// we can also use this method
arrowFunction = (name, message) => {
    return `${name} is written inside ${message}`;
};
console.log(arrowFunction("Abdul Raheem", "Arrow Function"));
// Optional Parameters: They are denoted by '?' in functions
function optionalParameter(num1, num2, num3) {
    if (num3 !== undefined) {
        return num1 * num2 * num3; // if num3 will be given as an argument than it will return the multiple of all number
    }
    else {
        return num1 * num2; // otherwise will only give the multiple of num1 and num2
    }
}
console.log(optionalParameter(5, 3)); // 15
console.log(optionalParameter(5, 3, 5)); // 75;
// Anonymous Function with optional parameter
let optionalAnonymous = function (firstName, middleName, lastName, age) {
    if (age !== undefined) {
        return `Name: ${firstName} ${middleName} ${lastName}, Age: ${age} `;
    }
    else {
        return `Name: ${firstName} ${middleName} ${lastName}`;
    }
};
console.log(optionalAnonymous("Muhammad", "Abdul", "Raheem", 21)); // Name: Muhammad Abdul Raheem, Age: 21
console.log(optionalAnonymous("Muhammad", "Abdul", "Raheem")); // Name: Muhammad Abdul Raheem
// Default Parameters
function defaultParmeters(name, age = 21) {
    return `Name: ${name}, Age: ${age}`;
}
console.log(defaultParmeters("Abdul Raheem")); // Name: Abdul Raheem, Age: 21
console.log(defaultParmeters("Abdul Raheem", undefined)); // when we have given undefined here so it will take the default value and output is Abdul Raheem and 21
console.log(defaultParmeters("Abdul Raheem", 32)); // now it will take the value of age we provided instead of default value
// Another example
function getDay(year = new Date().getFullYear(), month) {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
        case 2:
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                day = 29;
            }
            else {
                day = 28;
            }
            break;
        default:
            throw Error("Invalid Month!!!");
    }
    return day;
}
console.log(getDay(undefined, 6)); // 29
console.log(getDay(2023, 6)); // 28
// Function Rest Parameters: A rest parameter allows us to pass zero or any number of arguments of the specified type to a function.
function restParameters(...people) {
    return `${people.join(" ")} are Jobless`;
}
console.log(restParameters("John", "Alice", "Bob")); // we can give as many number of arguments as you want
function Job(Job_title, ...people) {
    return people.join(", ") + " are " + Job_title;
}
console.log(Job("mathematicians", "rachel", "john", "peter"));
console.log(Job("coders", "sarah", "joseph"));
