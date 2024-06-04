"use strict";
/*******************************************
    * STRUCTURAL TYPING IN OBJECT LITERALS *
 *******************************************/
Object.defineProperty(exports, "__esModule", { value: true });
let Ball = {
    diameter: 20
};
let Sphere = {
    diameter: 10
};
Ball = Sphere;
Sphere = Ball;
let tube = {
    diameter: 10,
    length: 10
};
Ball = tube; // valid
//tube= Ball;  // Error: Property 'length' is missing in type 'ball' but required in type 'Tube'
let myType = {
    name: "Abdul Raheem",
    id: 2
};
myType = {
    id: 2,
    name: "Abdul Sami" //Case 1: can only assign a type which has the the same properties
    //Object literals can only have properties that exist in contextual type
};
myType = {
    id: 2,
    // name_person:"Abdul Raheem"  // Case 2: Error= 'name_person' does not exist in type '{ name: string; id: number; }'.
    name: "Abdul Raheem" // valid
};
// Case 3: A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
let x;
x = {
    id: 2,
    firstName: "Abdul",
    lastName: "Raheem",
    digit: 5,
    integar: 10,
    describe() {
        return `First Name: ${this.firstName}, last Name: ${this.lastName} and ID: ${this.id} and digit ${this.digit} and integar ${this.integar}`;
    }
};
console.log(x.describe());
