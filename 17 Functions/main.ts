            /********************
                * FUNCTIONS * 
             ********************/


// Functions : Functions are building block of a program

// Named Function
function sum(num1:number,num2:number) {
    return num1+num2;    // this function will return the sum of num1 and num2
}
// Logging the result
console.log(sum(10,5));   // 15


// Anonymous Functions
let area= function(length:number,width:number){
    return length*width;
}
console.log(area(10,5));   // 50


// Anonymous Functions with explict casting

let greet= function(message:string,name:string):string{
    return `${name} says- ${message}`
}
console.log(greet("Salam!","Abdul Raheem"));


// Arrow Functions

let arrowFunction= (name:string,message:string)=> `${name} is written inside ${message}.`   // this is short hand property to return a value in arrow functions

// we can also use this method

arrowFunction= (name:string,message:string):string=>{
    return `${name} is written inside ${message}`
}

console.log(arrowFunction("Abdul Raheem","Arrow Function"));



// Optional Parameters: They are denoted by '?' in functions

function optionalParameter(num1:number,num2:number,num3?:number):number {
    if (num3!==undefined) {
        return num1*num2*num3     // if num3 will be given as an argument than it will return the multiple of all number
    }
    else{
        return num1*num2;   // otherwise will only give the multiple of num1 and num2
    }
}
console.log(optionalParameter(5,3));  // 15
console.log(optionalParameter(5,3,5));  // 75;

// Anonymous Function with optional parameter

let optionalAnonymous= function(firstName:string,middleName:string, lastName:string, age?:number):string{
    if (age!==undefined) {
        return `Name: ${firstName} ${middleName} ${lastName}, Age: ${age} `
    } else{
        return `Name: ${firstName} ${middleName} ${lastName}`
    }
}
console.log(optionalAnonymous("Muhammad","Abdul","Raheem",21));   // Name: Muhammad Abdul Raheem, Age: 21
console.log(optionalAnonymous("Muhammad","Abdul","Raheem")); // Name: Muhammad Abdul Raheem


// Default Parameters

function defaultParmeters(name:string, age:number=21):string {
    return  `Name: ${name}, Age: ${age}`
}
console.log(defaultParmeters("Abdul Raheem"))  // Name: Abdul Raheem, Age: 21

console.log(defaultParmeters("Abdul Raheem",undefined)); // when we have given undefined here so it will take the default value and output is Abdul Raheem and 21

console.log(defaultParmeters("Abdul Raheem", 32));  // now it will take the value of age we provided instead of default value



// Another example

function getDay(year:number= new Date().getFullYear(), month:number):number {
    let day=0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day=31
        case 4:
        case 6:
        case 9:
        case 11:
            day= 30;
        case 2:
            if (year%4===0 && year%100!==0 || year%400===0) {
                day=29;
            } else{
                day=28;
            }
            break;
    
        default:
            throw Error("Invalid Month!!!");
    }
    return day;
}
console.log(getDay(undefined,6));  // 29
console.log(getDay(2023,6));   // 28



// Function Rest Parameters: A rest parameter allows us to pass zero or any number of arguments of the specified type to a function.

function restParameters(jobTitle:string,...people:string[]):string {
    return `${people.join(" ")} are ${jobTitle}`
}
console.log(restParameters("Jobless","Alice","Bob"));   // we can give as many number of arguments as we want after giving the argument of jobtitle


// Another Example

// rest parameters should be used at the end if we use then it will show error


// function job(...people:string[],jobTitle:string):string {
    
        // Error : A rest parameter must be last in a parameter list.

// }

