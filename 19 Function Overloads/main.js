"use strict";
/****************************
    * FUNCTION OVERLOADS *
 ****************************/
Object.defineProperty(exports, "__esModule", { value: true });
function makeDate(monthOrTimestamp, day, year) {
    if (day !== undefined && year !== undefined) {
        return new Date(day, monthOrTimestamp, year);
    }
    else {
        return new Date(monthOrTimestamp);
    }
}
console.log(makeDate(12345678));
console.log(makeDate(1, 2, 3));
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(5, 5));
console.log(add("Hello", "World!"));
console.log(add(true, false));
