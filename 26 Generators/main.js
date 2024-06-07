"use strict";
/*********************
    * GENERATORS *
 *********************/
Object.defineProperty(exports, "__esModule", { value: true });
//Execution of a generator is paused till the next iteration is invoked
function* generatorFn() {
    // first task
    yield "First Value";
    yield "Second Value";
    yield "Third Value";
}
let generator = generatorFn();
let next = generator.next();
while (!next.done) {
    console.log(next.value);
    next = generator.next();
}
