"use strict";
/*******************
    * GENERICS *
 *******************/
Object.defineProperty(exports, "__esModule", { value: true });
//In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is 'generics', that is,
//being able to create a component that can work over a variety of types rather than a single one. 
//This allows users to consume these components and use their own types.
class container {
    array;
    constructor() {
        this.array = [];
    }
    add(item) {
        this.array.push(item);
    }
}
let c = new container();
c.add("Abdul Raheem!");
console.log(c);
