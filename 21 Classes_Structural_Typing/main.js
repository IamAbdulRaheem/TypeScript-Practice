"use strict";
/*********************************
    * CLASS STRUCTURAL TYPING *
 *********************************/
Object.defineProperty(exports, "__esModule", { value: true });
// Classes: A class in TypeScript is a blueprint for creating objects, encapsulating data (properties) and methods to manipulate that data.
class Human {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is Human and is eating`);
    }
}
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is Animal and is eating.`);
    }
}
class wildAnimal {
    title;
    constructor(title) {
        this.title = title;
    }
    eat() {
        console.log(`${this.title} is wild animal and is eating.`);
    }
}
class Robot {
    name;
    constructor(name) {
        this.name = name;
    }
}
let h = new Human("Abdul Raheem");
let a = new Animal("Goat");
let r = new Robot("D2-R2");
/* TypeScript is a structural type system which is different from
Java, C#, etc. When we compare two different types,
regardless of where they came from, if the types of each member
are compatible, then we say the types themselves are compatible. */
let h2 = h;
h = a; // valid because both have same properties and methods therefore are compatible
a = h; // valid
h.eat();
let r2 = r;
r = a; // valid
// a=r;  // Error: Property 'eat' is missing in type 'Robot' but required in type 'Animal'.
let hum = new Animal("Dog"); // valid
// let wild:Animal= new wildAnimal("Lion");   Error: Property 'name' is missing in type 'wildAnimal' but required in type 'Animal'.
let r0 = new Animal("Donkey"); // valid
// let a0:Animal= new Robot("")      error
let isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot); //false, giving the right results
let isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal); //true, giving the right results
//Now it is your reposibility to figure out 
//why the above code is not giving an Error?
