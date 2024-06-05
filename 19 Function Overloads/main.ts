            /****************************
                * FUNCTION OVERLOADS * 
             ****************************/

// Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).

function makeDate(timestamp:number):Date;
function makeDate(month:number,day:number,year:number):Date;
function makeDate(monthOrTimestamp:number, day?:number, year?:number):Date{
    if (day!==undefined && year!==undefined) {
        return new Date(day,monthOrTimestamp,year);
    } else{
        return new Date (monthOrTimestamp);
    }
}
console.log(makeDate(12345678));
console.log(makeDate(1,2,3));
// console.log(makeDate(1,2))    // error



// Another Example

function add(arg1:string,arg2:string):string; 
function add(arg1:number,arg2:number):number; 
function add(arg1:boolean,arg2:boolean):boolean;
function add(arg1:any,arg2:any):any {
    return arg1+arg2
} 

console.log(add(5,5));
console.log(add("Hello","World!"));
console.log(add(true,false));