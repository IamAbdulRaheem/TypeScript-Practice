                /****************
                    * ENUMS * 
                 ****************/


/**
 Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
 */



enum Color{
    Red,
    Blue,
    Green,
}
let color:string= Color[2];
console.log(color);   // output: Green



enum Color1{
    Red=1,
    Blue,
    Green
}
let color1= Color1.Green
console.log(color1);



enum ColorIndex{
    Red= 1,
    Blue=2,
    Green=4,
}
let colorIndex= ColorIndex["Blue"];
console.log(colorIndex);



// const enums

const enum Days{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
const days:Days=Days.Friday;
console.log(days);