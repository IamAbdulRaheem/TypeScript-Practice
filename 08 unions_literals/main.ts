                    /*****************
                        * UNIONS * 
                     *****************/


// Union Types: Union type allow variable to hold value of multiple types

let unionTypes: string | number | boolean;
// In the above example message hold three types and we have use any of them

unionTypes= "Hello";   // Valid
unionTypes= 4;   // valid
unionTypes= true;   // valid

// Using types other than these three will cause an error

// unionTypes= undefined;    // Error:  Type 'undefined' is not assignable to type 'string | number | boolean'




                    /********************
                        * NARROWING * 
                     ********************/

let narrowTypes: number | string;
narrowTypes= 166;
console.log(narrowTypes) // 16: this is narrowing because TypeScript assumes the type of narrowTypes as number and now we can apply number method to it

console.log(narrowTypes.toFixed(2));   // Applying any string method will give an error


// Another Example

narrowTypes= "Abdul Raheem";  // Narrowing
console.log(narrowTypes);  // output: Abdul Raheem
// Now narrowTypes is narrowed to string and now we can apply string method to narrowTypes

console.log(narrowTypes.toUpperCase());
console.log(narrowTypes.toString());   // this method is valid for both number and string types


// We can also explain the concept of narrowing using if else or conditional ternary operators

let personDetails= Math.random()>0.5? "Abdul Raheem":21;
if (typeof personDetails==="string") {
    console.log(personDetails.toUpperCase()); // can be called with the help of narrowing
}
else{
    // it will be number so we can use number method
    console.log(personDetails.toFixed(2));
}






                /************************
                    * TYPE LITERALS * 
                 ************************/

// TYPE LITERALS: Using type literals we can use the exact values that a variable can hold. This is useful when you want your variable to have specific value


let literalTypes: 21 | "Abdul Raheem" | "Abdul Sami" | null
literalTypes= 21;  // valid 

//literalTypes= 22   // Error: Type '22' is not assignable to type '"Abdul Raheem" | 21 | "Abdul Sami" | null'.

literalTypes= "Abdul Raheem";  // valid
literalTypes= "Abdul Sami";   // valid


// We can also use type alias
type id= number | string | boolean;
// And we can also combine them
type combinedId= id | undefined;
// Illustrating with examples

let idcombinedTypes:combinedId= 23;
idcombinedTypes= 23;           // valid          
idcombinedTypes= "Abdul Raheem";    // valid
idcombinedTypes= true;    // valid
idcombinedTypes= undefined;    // valid

// idcombinedTypes= null;    // Error: Type 'null' is not assignable to type 'combinedId'
