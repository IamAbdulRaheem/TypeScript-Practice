            /****************
                * ARRAYS * 
             ****************/



const array1:number[]=[10,20,30,40];
console.log(array1[2]);   // 20

// Another method
const array2:Array<number>=[10,20,30,40];
console.log(array2);

// Empty Array and Push
let array3:number[]=[];
console.log(array3.push(...array1));  // will tell the number of elements in array1
