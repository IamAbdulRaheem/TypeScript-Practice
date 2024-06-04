        /*******************************************
            * STRUCTURAL TYPING IN OBJECT LITERALS * 
         *******************************************/



// Structural typing in object literal: TypeScript is a Structural Type System. A structural type system means that when comparing types, TypeScript only takes into account the members on the type.

// This is in contrast to nominal type systems, where you could create two types but could not assign them to each other.



// Example
interface ball{
    diameter:number;
}
interface sphere{
    diameter:number;
}
let Ball:ball={
    diameter:20
}
let Sphere:sphere={
    diameter:10
}
Ball=Sphere;
Sphere=Ball; 
 // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.

interface Tube{
    diameter:number;
    length:number;
}
let tube:Tube={
    diameter:10,
    length: 10
}
Ball=tube;   // valid
//tube= Ball;  // Error: Property 'length' is missing in type 'ball' but required in type 'Tube'



let myType={
    name: "Abdul Raheem",
    id:2
}
myType={
    id:2,
    name:"Abdul Sami"  //Case 1: can only assign a type which has the the same properties
    //Object literals can only have properties that exist in contextual type
}

myType={
    id:2,
    // name_person:"Abdul Raheem"  // Case 2: Error= 'name_person' does not exist in type '{ name: string; id: number; }'.
    name: "Abdul Raheem"   // valid
}



// Case 3: A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

let x:{
    id:number;
    [x:string]:any;   // Now the name of x can be anything you want but its type should be string
    describe():string;
}
x={
    id:2,
    firstName: "Abdul",
    lastName: "Raheem",
    digit:5,
    integar: 10,
    describe():string{
        return `First Name: ${this.firstName}, last Name: ${this.lastName} and ID: ${this.id} and digit ${this.digit} and integar ${this.integar}`
    }
}
console.log(x.describe());



//Case when STALE object literal are assigned to a variable 
let myType2={
    id:30,
    name:"Abdul Raheem",
}
myType=myType2  // valid: can only assign a type which has the the same properties, rule same for fresh and stale object



let myType3={
    id:20,
    personName: "Abdul Raheem",
}
/*Error, renamed or missing property, rule same for stale and fresh object 
myType2=myType3
myType=myType3*/

let indexSignatureX:{
    id:number,
    [x:string]:any;
}
let indexSignatureY={
    id:2,
    fullName: "Abdul Raheem",
    firstName: "Abdul Raheem",
    lastName: "Abdul Raheem"
}
indexSignatureX=indexSignatureY;   // valid


let x1: { foo: number };
// x1 = { foo: 1, baz: 2 };  // Error, excess property `baz`

let y: { foo: number, bar?: number };
// y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`



let a: { foo: number };
let a1 = { foo: 1, baz: 2 };
a = a1;//No Error

let z: { foo: number, bar?: number };
let z1 = { foo: 1, baz: 2 };
z = z1;//No Error