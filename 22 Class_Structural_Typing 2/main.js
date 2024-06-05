"use strict";
/*********************************
    * CLASS STRUCTURAL TYPING *
 *********************************/
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
    eat() {
        console.log(this.name + " is a Human and is eating");
    }
}
let h1 = new Human("Abdul Raheem");
let a1 = new Animal("Dog", 2);
h1 = new Animal("this", 25);
// a1 = new Human("zeeshan");//ERROR
//my common sense is saying this is correct, but?
let a = { name: "Zia" };
// a = {name: "Zeeshan", age: 22};//ERRORs
//It seems that for object literals there is a rule for 
//fresh objects but this rules does not apply to 
//normal objects derived from classes 
