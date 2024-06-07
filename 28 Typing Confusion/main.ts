                /**************************
                    * TYPING CONFUSIOM * 
                 **************************/



//Object literals have an associated freshness before they're 
//bound to a variable. 
//The same doesn't apply for any other expressions.

//The idea is that object literals are often used for option bags 
//(where the user has to manually type out each property 
//name at each use-site), and this behavior catches typos.

//If you'd like to prevent Animal from being assigned to a Human, 
//you can add a private property to Animal, 
//since private and protected properties need to originate from
//the same declaration to be compatible.

class Human{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}

class Animal{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    eat(quantity:number){
        console.log(`${this.name} is Animal and is eating!`)
    }
}

let d={name:"Human",age:4};
let h:Human= {name:"Abdul Raheem"};  // allowed
let h1:Human=d;   // concept of stale object
let isHuman= h instanceof Human;
console.log(isHuman);  // false because h is not instance of class Human


// let a1:Animal= {name:"Dog",age:4};   // eat method is also required

let a2:Animal= {name:"Dog",age:4,eat() {
    console.log(`Eat in Object Literal!`)
    },
}

// a2.eat();    // Not allowed
a2.eat(3);   // This is allowed

let isAnimal:boolean= a2 instanceof Animal;
console.log(isAnimal);   // false because a2 is not instance of Animal