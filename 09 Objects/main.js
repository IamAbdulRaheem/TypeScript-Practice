"use strict";
/*****************
    * OBJECTS *
 *****************/
Object.defineProperty(exports, "__esModule", { value: true });
// Objects: In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.
let employee = {
    name: "Abdul Raheem",
    age: 21,
    workingHours: "9 - 5"
};
// Accessing data through dot notation
console.log(employee.name); // Abdul Raheem
// Type Declaration: We can also define types before we assign values
let student;
student = {
    name: "Abdul Raheem",
    age: 21,
    workingHours: "9 - 5"
};
console.log(student["name"]); // can also access property through this method
console.log(student.age); // can also access property through dot notation
let carDetails = {
    name: "Toyota",
    model: "Corolla",
    year: 2022
};
console.log(carDetails["model"]); // Corolla
console.log(carDetails.name); // Toyota
let result = {
    team: "Pakistan",
    score: 250,
    resultOfMatch() {
        return `${this.team} won the match and score was ${this.score}`;
    },
};
console.log(result.resultOfMatch());
// Optional Properties in Objects: it is denoted by '?'
let laptop = {
    brand: "hp",
    model: "XPS 15",
    year: 2022,
    // RAM is optional so we can define here or not it is valid
};
// Function Methods in Objects
let mobile = {
    make: "vivo",
    model: 1811,
    features() {
        return `This mobile is ${this.make} and its model is ${this.model}.`;
    }
};
// Accessing property of object
console.log(mobile["make"]);
console.log(mobile.features());
// Nested Objects: Objects within objects
let drama = {
    name: "Kurlus Osman",
    hero: "Osman",
    villian: "nikola",
    moreDetails: {
        day: "thursday",
        hisFather: "Eartugural"
    }
};
console.log(drama.moreDetails.hisFather); // so how we can access property from nested object
console.log(drama.moreDetails["day"]); // another method
// Objects in functions
function makeAlbum(artist, title, tracks) {
    let album = {
        artist, title, tracks
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(makeAlbum("Atif", "Tera"));
console.log(makeAlbum("Aslam", "Mear", 85));
