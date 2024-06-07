"use strict";
/**************************
    * TYPING CONFUSIOM *
 **************************/
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(quantity) {
        console.log(`${this.name} is Animal and is eating!`);
    }
}
let d = { name: "Human", age: 4 };
let h = { name: "Abdul Raheem" }; // allowed
let h1 = d; // concept of stale object
let isHuman = h instanceof Human;
console.log(isHuman); // false because h is not instance of class Human
// let a1:Animal= {name:"Dog",age:4};   // eat method is also required
let a2 = { name: "Dog", age: 4, eat() {
        console.log(`Eat in Object Literal!`);
    },
};
// a2.eat();    // Not allowed
a2.eat(3); // This is allowed
let isAnimal = a2 instanceof Animal;
console.log(isAnimal);
