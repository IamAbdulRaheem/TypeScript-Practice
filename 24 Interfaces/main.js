"use strict";
/**********************
    * INTERFACES *
 **********************/
Object.defineProperty(exports, "__esModule", { value: true });
//One of TypeScript's core principles is that type-checking focuses on the 'shape' that values have. 
//This is sometimes called "duck typing" or "structural subtyping". 
//In TypeScript, interfaces fill the role of naming these types
// Added new rules for TypeScript 1.6 https://github.com/Microsoft/TypeScript/pull/3823
//Example without a named interface
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
//Fresh Objects:
//Case 1
printLabel({ label: "size 10 object!" });
// Case 2
// printLabel({myLabel:""})  renamed property: Error
// Case 3
// A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
function excessProperty(labeledObj) {
    console.log(arguments[0]); // Now we have index signature so x can have any name now but its property should be of type string
}
excessProperty({ name: "Abdul Raheem" }); // name is now allowed as we have index signature above
// printLabel({label:"size 10 object",size:21});   // Fresh object so extra properties not allowed
//Stale Objects:
let myObj1 = { label: "size 10 object" };
printLabel(myObj1); // //Case 1 exact properties: OK
let myObj2 = { mylabel: "size 10 object" };
// printLabel(myObj2);   Error: Property 'label' is missing in type '{ mylabel: string; }' but required in type '{ label: string; }'.
let myObj3 = { name: "Abdul Raheem" };
excessProperty(myObj3); //  `name` matched by index signature
let myObj4 = { label: "size 10 object", size: 10 };
printLabel(myObj4); // Stale Literal: extra properties allowed
function printLabel1(labeledObj) {
    console.log(labeledObj.label);
}
function printLabelExcess(labeledObj) {
    console.log(arguments[0]);
}
//Fresh Objects
printLabel1({ label: "size 11 object" }); // exact properties ok
// printLabel1({mylabel:""})  Error: 'mylabel' does not exist in type '{ label: string; }'
printLabelExcess({ name: "Abdul Raheem" }); // `name` matched by index signature
// printLabel1({size:11,label:"size 11 object"})  Fresh Literal: Error no extra properties allowed
//Stale Objects
let obj1 = { label: "size 12 object" };
printLabel1(obj1); // exact properties: OK
let obj2 = { myLabel: "size 12 object" };
// printLabel1(obj2);    renamed property: Error
let obj3 = { name: "Abdul Raheem" };
printLabelExcess(obj3); //`name` matched by index signature
let obj4 = { label: "size 12 object", size: 12 };
printLabel1(obj4); // Stale Literal: extra properties allowed
function createSquare(config) {
    let newSquare = { color: "White", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({});
console.log(mySquare); // color:white, area:100
mySquare = createSquare({ color: "Black" });
console.log(mySquare); // color:Black, area: 100
mySquare = createSquare({ width: 2 });
console.log(mySquare); // color:White, area: 4
console.log(mySquare.area); // 4
console.log(mySquare.color); // white
let mySearch = function (src, sub) {
    let result = src.search(sub);
    if (result === -1) {
        return false;
    }
    else {
        return true;
    }
};
let myResult = mySearch("source", "substring");
console.log(myResult.valueOf());
let myArray = ["Abdul Raheem", "Abdul Sami"]; // This works because myArray is an array of strings.
console.log(myArray[1]);
let myDictionary = { "first": "Abdul Raheem", "second": "Abdul Sami" };
console.log(myDictionary["first"]);
console.log(myDictionary["second"]);
let myDictionary2 = { "first": "Abdul Raheem", "second": "Abdul Sami", "length": "2" };
console.log(myDictionary2["length"]);
class Clock {
    currentTime;
    constructor() {
        this.currentTime = new Date();
    }
    getTime() {
        return `The current Time is ${this.currentTime}.`;
    }
}
const time = new Clock();
console.log(time.getTime());
let square = {};
square.color = "Blue";
square.sideLength = 10;
let square1 = {}; // Alternative type casting
square1.color = "Black";
square1.penWidth = 10;
square1.sideLength = 21;
console.log(square);
console.log(square1);
function getCounter() {
    let counter = (function (start) {
        console.log(`The counter started at ${start}`);
        return `The counter started at ${start}`;
    });
    counter.interval = 0;
    counter.reset = function () {
        console.log("Counter Reset!");
        counter.interval = 0;
    };
    return counter;
}
let c = getCounter();
c(10);
c.interval = 5.0;
c.reset();
// Classes as Interfaces
//A class declaration creates two things: a type representing instances of the class and a constructor function. 
//Because classes create types, you can use them in the same places you would be able to use interfaces.
class first {
    a;
    b;
    constructor() {
        this.a = 1;
        this.b = 2;
    }
}
let result = { a: 10, b: 2, c: 3 };
console.log(result.a);
