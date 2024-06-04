"use strict";
// Exporting a default export 
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = exports.add = void 0;
const a = 5;
exports.default = a;
// Another Example of exporting a function
const add = (a, b) => {
    return a + b;
};
exports.add = add;
// Exporting a class
class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
exports.person = person;
