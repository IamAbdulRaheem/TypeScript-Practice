"use strict";
/*****************
    * CLASSES *
 *****************/
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract Method
class base {
    foo() {
        return this.bar();
    }
}
class aE extends base {
    bar() {
        return 1;
    }
}
// let obj1:base= new base()   Error: Cannot create an instance of an abstract class.
let obj1 = new aE();
console.log(obj1.bar());
class Base {
    getName() {
        return this.printName();
    }
}
class derives extends Base {
    printName() {
        return `Hello`;
    }
}
const obj = new derives();
console.log(obj.printName());
// Constructor
// Case 1:
// If parent class provide constructor and child class does not
// provide then child class will use parent's constrcutor
// and child's object creation will required use of parent's 
//constructor parameters 
class A {
    name;
    constructor(theName, age) {
        this.name = theName;
        console.log("A Constructor");
    }
}
class B extends A {
}
let a = new A("Abdul Raheem", 21); // valid
let b = new A("Abdul Raheem", 21); // child is using parent constructor
// let c:B= new B("Abdul Raheem")    Error: Expected 2 arguments, but got 1.
// Case 2:
// If parent class does not provide constructor and child class provide constrcutor then 
// child class must call super() within child's class constructor
class C {
}
class D extends C {
    name;
    constructor(name, age) {
        super();
        this.name = name;
        console.log("D constructor!");
    }
}
let c = new C(); // work fine
let d = new D("Abdul Raheem", 21); // provided arguemts other wise will show error
// Case 3:
// If parent class and child class both provide constructor 
// then child class must call super with same parameters as 
// they are in parent's constructor call to super
class E {
    name;
    constructor(name, age) {
        this.name = name;
        console.log("E constructor!");
    }
}
class F extends E {
    name;
    constructor(name, age) {
        super(name, age);
        this.name = name;
        console.log("F Constructor!");
    }
}
let e = new E("Abdul Raheem", 21);
let f = new F("Abdul Raheem", 21);
let g = new E("Abdul Raheem", 21); // compatible
// Class Modifiers: they decide the visibility of a class
// Private Modifier: can only be accessed from within class
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `The name of animal is ${this.name}.`;
    }
}
let animal = new Animal("Dog");
// console.log(animal.name);   Error: private members cannot be accessed directly
console.log(animal.getName()); // valid
// Protected Modifiers: They can be accessed within the class or from subclasses
class listString {
    contents;
    constructor() {
        this.contents = [];
    }
    setElement(index, item) {
        this.contents[index] = item;
    }
}
class stackString extends listString {
    currentIndex;
    constructor() {
        super();
        this.currentIndex = 0;
    }
    push(item) {
        this.setElement(this.currentIndex, item);
        this.currentIndex++;
    }
}
let stack = new stackString();
// stack.setElement();   Error: Property 'setElement' is protected and only accessible within class 'listString' and its subclasses.
// Public Modifier: They can be accessed from anywhere
class Public {
    name;
    constructor() {
        this.name = "Abdul Raheem";
    }
}
const pub = new Public();
console.log(pub.name); // Abdul Raheem
// Class Accessors: (Getter and Setter)
class Person {
    name;
    constructor() {
        this.name = "Abdul Raheem";
    }
    get getName() {
        return this.name;
    }
    set getName(newName) {
        this.name = newName;
    }
}
const person = new Person();
console.log(person.name); // Abdul Raheem
person.getName = "Abdul Sami";
console.log(person.name); // Abdul Sami
// Static Members
class myClass {
    static name;
    constructor(name) {
        myClass.name = name;
    }
    static getName() {
        return myClass.name;
    }
}
const getName = new myClass("Abdul Raheem");
console.log(myClass.name);
console.log(myClass.getName());
