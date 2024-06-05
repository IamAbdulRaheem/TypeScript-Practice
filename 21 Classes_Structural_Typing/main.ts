        /*********************************
            * CLASS STRUCTURAL TYPING * 
         *********************************/



// Classes: A class in TypeScript is a blueprint for creating objects, encapsulating data (properties) and methods to manipulate that data.

class Human{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is Human and is eating`)
    }
}

class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is Animal and is eating.`)
    }
}

class wildAnimal{
    title:string;
    constructor(title:string){
        this.title=title;
    }
    eat(){
        console.log(`${this.title} is wild animal and is eating.`)
    }
}

class Robot{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}

let h:Human= new Human("Abdul Raheem");
let a:Animal= new Animal("Goat");
let r:Robot= new Robot("D2-R2");

/* TypeScript is a structural type system which is different from 
Java, C#, etc. When we compare two different types, 
regardless of where they came from, if the types of each member 
are compatible, then we say the types themselves are compatible. */

let h2=h;
h=a;  // valid because both have same properties and methods therefore are compatible
a=h;  // valid
h.eat();

let r2=r;
r=a;  // valid

// a=r;  // Error: Property 'eat' is missing in type 'Robot' but required in type 'Animal'.


let hum:Human= new Animal("Dog");   // valid

// let wild:Animal= new wildAnimal("Lion");   Error: Property 'name' is missing in type 'wildAnimal' but required in type 'Animal'.

let r0:Robot= new Animal("Donkey");  // valid
// let a0:Animal= new Robot("")      error


let isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot);//false, giving the right results

let isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal);//true, giving the right results

//Now it is your reposibility to figure out 
//why the above code is not giving an Error?
