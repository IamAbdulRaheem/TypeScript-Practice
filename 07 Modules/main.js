"use strict";
// Importing values from first.ts and second.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1.Importing default exports
const first_1 = __importDefault(require("./first")); // we have given path that from which file it will be imported
// Default Exports can be imported only one at once
console.log(first_1.default); // output 5
// 2.Improting named exports 
const second_1 = require("./second"); // Named exports can be imported more than one at once
console.log(second_1.b); // 10
console.log(second_1.c); // 2
// 3.Importing function add from first.ts
const first_2 = require("./first");
console.log((0, first_2.add)(5, 3)); // 8
// 4.Importing class person from first.ts
const first_3 = require("./first");
const detail = new first_3.person("Abdul Raheem");
console.log(detail.greet()); // Hello Abdul Raheem
// When we transpile this program it runs correctly.
// However, note that the transpiled JavaScript code doesnot use the ES Module sytax but rather the old commonjs syntax.
