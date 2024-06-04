// Importing values from first.ts and second.ts

// 1.Importing default exports

import a from "./first";   // we have given path that from which file it will be imported

// Default Exports can be imported only one at once

console.log(a)   // output 5


// 2.Improting named exports 

import { b,c } from "./second";   // Named exports can be imported more than one at once

console.log(b);   // 10
console.log(c);   // 2


// 3.Importing function add from first.ts
import { add } from "./first";
console.log(add(5,3));   // 8


// 4.Importing class person from first.ts
import { person } from "./first";
const detail= new person("Abdul Raheem");
console.log(detail.greet());   // Hello Abdul Raheem



// 5. Importing interface student from first.ts
import student from "./first";
const studentDetails:student={
    name:"Abdul Raheem",
    age: 21,
    details():string {
        return `My name is ${this.name} and age is ${this.age}`
    },
}
console.log(studentDetails.details());   // My name is Abdul Raheem and age is 21


// When we transpile this program it runs correctly.

// However, note that the transpiled JavaScript code doesnot use the ES Module sytax but rather the old commonjs syntax.