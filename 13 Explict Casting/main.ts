            /***************************
                * EXPLICT CASTING * 
             ***************************/


// Casting is the process of overriding a type.
// A straightforward way to cast a variable is using the `as` keyword, which will directly change the type of the given variable.
let name:unknown="Abdul Raheem";
console.log((name as string).length);
console.log((<string>name).length)



// Force casting

// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

let x="Hello";
console.log(((x as unknown)as number))