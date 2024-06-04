                    /*****************
                        * OBJECTS * 
                     *****************/


// Objects: In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

let employee={
    name: "Abdul Raheem",
    age: 21,
    workingHours: "9 - 5"
}
// Accessing data through dot notation
console.log(employee.name);   // Abdul Raheem



// Type Declaration: We can also define types before we assign values

let student:{
    name: string;
    age: number;
    workingHours: string;
}
student={
    name:"Abdul Raheem",
    age:21,
    workingHours: "9 - 5"
}
console.log(student["name"]);  // can also access property through this method
console.log(student.age);  // can also access property through dot notation




// Objects in Interfaces

interface car{
    name:string;
    model: string;
    year: number;
}
let carDetails:car={
    name:"Toyota",
    model:"Corolla",
    year: 2022
}
console.log(carDetails["model"]);  // Corolla
console.log(carDetails.name);   // Toyota


// Object in type alias

type cricket={
    team:string;
    score:number;
    resultOfMatch():string;
}
let result:cricket={
    team:"Pakistan",
    score: 250,
    resultOfMatch():string {
        return `${this.team} won the match and score was ${this.score}`
    },
}
console.log(result.resultOfMatch());




// Optional Properties in Objects: it is denoted by '?'

let laptop:{
    brand:string;
    model: string;
    year: number;
    RAM?:string;
}={
    brand:"hp",
    model:"XPS 15",
    year:2022,
    // RAM is optional so we can define here or not it is valid
}


// Function Methods in Objects

let mobile:{
    make: string;
    model: number;
    features():string;
}={
    make:"vivo",
    model: 1811,
    features():string{
        return `This mobile is ${this.make} and its model is ${this.model}.`
    }
}
// Accessing property of object
console.log(mobile["make"]);
console.log(mobile.features());


// Nested Objects: Objects within objects
let drama={
    name:"Kurlus Osman",
    hero: "Osman",
    villian: "nikola",
    moreDetails:{
        day:"thursday",
        hisFather: "Eartugural"
    }
}
console.log(drama.moreDetails.hisFather);   // so how we can access property from nested object
console.log(drama.moreDetails["day"]);  // another method

// Another example of nested objects is
type Author={
    firstName:string;
    lastName:string;
}
type Book={
    author: Author;
    name:string;
}
let book:Book={
    author:{
        firstName: "Abdul",
        lastName: "Raheem",
    },
    name: "My Book"
}



// Objects in functions

function makeAlbum(artist:string,title:string,tracks?:number) {
    let album:any={
        artist,title
    }
    if (tracks) {
        album["tracks"]=tracks;
    }
    return album;
}
console.log(makeAlbum("Atif","first"));
console.log(makeAlbum("Aslam","second",85));



// Objects in Classes

class course{
    institute:string;
    timing:string;
    name:string;
    duration:number;
    constructor(institute:string,timing:string,name:string,duration:number){
        this.institute=institute;
        this.timing=timing;
        this.name=name;
        this.duration=duration;
    }
    describe():string{
        return `The institute is ${this.institute}, the timing of course is ${this.timing}, the duration of course is ${this.duration} and name is ${this.name}`
    }
}
const details= new course("GIAIC","3 Hours","GenAI",1);
console.log(details.describe());