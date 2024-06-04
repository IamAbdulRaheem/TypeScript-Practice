// const & let

// let is used when you want to change the value of variable

// Example

let message:string= "Hello Abdul Raheem!";
message= "Hello Abdul Sami!";  // value is changed
console.log(message)   // Hello Abdul Sami!


// const is used when you do not want to change the value of variable if you will try to change then it will show error

const age:number= 21;
// age= 32    // Error : Cannot assign to 'age' because it is a constant

console.log(age);   // 21
