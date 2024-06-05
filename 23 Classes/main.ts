            /*****************
                * CLASSES * 
             *****************/


// Abstract Method

abstract class base{
    foo():number{
        return this.bar();
    }
    abstract bar():number
}
class aE extends base{
    bar(): number {
        return 1
    }
}
// let obj1:base= new base()   Error: Cannot create an instance of an abstract class.
let obj1= new aE();
console.log(obj1.bar());


abstract class Base{
    getName(){
        return this.printName();
    }
    abstract printName():string
}
class derives extends Base{
    printName(): string {
        return `Hello`;
    }
}
const obj= new derives();
console.log(obj.printName());



// Constructor

// Case 1:
// If parent class provide constructor and child class does not
// provide then child class will use parent's constrcutor
// and child's object creation will required use of parent's 
//constructor parameters 

class A{
    name:string;
    constructor(theName:string,age:number){
        this.name=theName;
        console.log("A Constructor");
    }
}
class B extends A{

}
let a:A= new A("Abdul Raheem",21);  // valid
let b:B= new A("Abdul Raheem",21);  // child is using parent constructor
// let c:B= new B("Abdul Raheem")    Error: Expected 2 arguments, but got 1.


// Case 2:
// If parent class does not provide constructor and child class provide constrcutor then 
// child class must call super() within child's class constructor

class C{

}
class D extends C{
    name:string;
    constructor(name:string,age:number){
        super()
        this.name=name;
        console.log("D constructor!");
    }
}
let c:C= new C()  // work fine
let d:D= new D("Abdul Raheem",21);   // provided arguemts other wise will show error



// Case 3:
// If parent class and child class both provide constructor 
// then child class must call super with same parameters as 
// they are in parent's constructor call to super

class E{
    name:string;
    constructor(name:string,age:number){
        this.name=name;
        console.log("E constructor!")
    }
}
class F extends E{
    name:string
    constructor(name:string,age:number){
        super(name,age);
        this.name=name;
        console.log("F Constructor!")
    }
}
let e:E= new E("Abdul Raheem",21);
let f:F= new F("Abdul Raheem",21);
let g:F= new E("Abdul Raheem",21);   // compatible


// Class Modifiers: they decide the visibility of a class

// Private Modifier: can only be accessed from within class

class Animal{
    private name:string;
    constructor(name:string){
        this.name=name;
    }
    getName():string{
        return `The name of animal is ${this.name}.`
    }
}
let animal:Animal= new Animal("Dog");
// console.log(animal.name);   Error: private members cannot be accessed directly
console.log(animal.getName());   // valid


// Protected Modifiers: They can be accessed within the class or from subclasses

class listString{
    contents:string[];
    constructor(){
        this.contents=[];
    }
    protected setElement(index:number,item:string){
        this.contents[index]=item;
    }
}
class stackString extends listString{
    currentIndex:number;
    constructor(){
        super();
        this.currentIndex=0
    }
    public push(item:string){
        this.setElement(this.currentIndex,item);
        this.currentIndex++;
    }
}
let stack:stackString= new stackString();


// stack.setElement();   Error: Property 'setElement' is protected and only accessible within class 'listString' and its subclasses.


// Public Modifier: They can be accessed from anywhere

class Public{
    public name:string;
    constructor(){
        this.name="Abdul Raheem"
    }
}
const pub:Public= new Public();
console.log(pub.name);   // Abdul Raheem




// Class Accessors: (Getter and Setter)

class Person{
    name:string;
    constructor(){
        this.name="Abdul Raheem";
    }
    get getName():string{
        return this.name;
    }
    set getName(newName:string){
        this.name=newName;
    }
}
const person:Person= new Person();
console.log(person.name);   // Abdul Raheem
person.getName= "Abdul Sami";
console.log(person.name);   // Abdul Sami



// Static Members

class myClass{
   static name:string;
    constructor(name:string){
        myClass.name=name;
    }
   static getName():string{
        return myClass.name;
    }
}
const getName:myClass= new myClass("Abdul Raheem");
console.log(myClass.name);   // Abdul Raheem
console.log(myClass.getName());  // Abdul Raheem


