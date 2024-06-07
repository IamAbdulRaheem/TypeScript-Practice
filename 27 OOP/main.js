"use strict";
//             /************************************
//                 * OBJECT ORIENTED PROGRAMMING * 
//              ************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// // Object-oriented programming is a programming paradigm based on classes and objects rather than functions and logic. 
// class car{
//     model:string;
//     year:number;
//     price:string;
//     constructor(model:string,year:number,price:string){
//         this.model=model;
//         this.price=price;
//         this.year=year;
//     }
//     drive(){
//         console.log(`The car has started driving!`)
//     }
// }
// let tesla= new car("tesla",2022,"2500000");
// // Inheritance
// // Inheritance in object-oriented programming refers to a mechanism where a class (subclass) inherits properties from an existing class (superclass).
// class car2 extends car{
//     occupation:string;
//     constructor(model:string,year:number,price:string,occupation:string){
//         super(model,year,price);
//         this.occupation=occupation;
//     }
//     drive(): void {
//         console.log(`The car2 has also started driving`)
//     }
//     describe(){
//         console.log(`The car is ${this.model} and its price is ${this.price}`)
//     }
// }
// let cars= new car2("tesla",2022,"2500000","driving");  // we have defined extra properties in subclass
// // Implementation
// // Sometimes, a subclass needs to follow a superclass’s implementation but not inherit its properties. These cases require the implements keyword instead of the extends keyword.
// class Human{
//     name:string;
//     gender:string;
//     constructor(name:string,gender:string){
//         this.name=name;
//         this.gender=gender;
//     }
//     speak(){
//         console.log(`Hello my name is ${this.name} and I am speaking!`);
//     }
// }
// class Doctor implements Human{
//     name:string;
//     gender: string;
//     age:number
//     constructor(name:string,gender:string,age:number){
//         this.gender=gender;
//         this.name=name;
//         this.age=age;
//     }
//     speak(): void {
//         console.log(`Hello I am a Doctor!!`);
//     }
//     describe(){
//         console.log(`Hello This is Doctor class!`)
//     }
// }
// let human= new Doctor("Abdul Raheem","male",21);
// human.describe()
// // Over Ridding
// // When subclasses inherit properties and methods from their superclass, the inherited properties can be modified or extended. This process of modifying an inherited property is known as overriding.
// class A{
//     print(){
//         console.log(`I am Class A`);
//     }
// }
// class B extends A{
//     print(): void {
//         super.print();
//         console.log(`I am Class B`)
//     }
// }
// let object= new A();
// object.print();   // I am Class A
// let object2= new B();
// object2.print();  // I am Class A, I am Class B
// // subclass doesn't “extend” the superclasses; rather, it “implements” them.
// class One{};
// class Two extends One{};
// class Three extends One{};
// // class Four extends Two,Three{}    Error
// class Four implements Two,Three{}   // valid
// /*Setters and Getters
// A setter is a method inside a class that sets the value of an instance variable.
// A getter is a method inside a class that returns the value of an instance variable. */
// class setAndGet{
//     variable:string;
//     constructor(variable:string){
//         this.variable=variable;
//     }
//     get getVariable(){
//         return this.variable;
//     }
//     set getVariable(value:string){
//         if (value===" ") {
//             console.log("The value of variable can't be empty!");
//             this.getVariable=value;
//         }
//     }
// }
// let getandset= new setAndGet(" ");
// console.log(getandset)
class A {
    _variable;
    constructor(variable) { this._variable = variable; }
    get variable() { return this._variable; }
    set variable(value) { if (value === '')
        throw new Error("Variable cannot be an empty string"); this._variable = value; }
}
const object = new A('string'); //setting the variableobject.variable = 'different string'//getting the variableconsole.log(object.variable)
