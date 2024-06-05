        /*********************************
            * CLASS STRUCTURAL TYPING * 
         *********************************/


 

class Human {
    
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

class Animal {
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

let h1:Human= new Human("Abdul Raheem");
let a1:Animal= new Animal("Dog",2);
h1= new Animal("this",25);
let h2=h1;
h2=a1;   /// valid
// a1 = new Human("zeeshan");//ERROR

//my common sense is saying this is correct, but?

let a = {name: "Zia"};
// a = {name: "Zeeshan", age: 22};//ERRORs

//It seems that for object literals there is a rule for 
//fresh objects but this rules does not apply to 
//normal objects derived from classes 