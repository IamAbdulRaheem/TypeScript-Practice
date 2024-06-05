                /*****************
                    * TUPLES * 
                 *****************/


// Tuples: A tuple is a typed array with a pre-defined length and types for each index.

// Example

let tuple:[number,string,boolean]=[3,"Abdul Raheem",true];
console.log(tuple);

// We have no type safety in our tuple for indexes 3+
let ourTuple:[boolean,number,string];
ourTuple=[true,21,"Abdul Raheem"];
ourTuple.push("Abdul Sami");
console.log(ourTuple);

// Another Example
let anotherTuple:[number,string,boolean];
anotherTuple=[21,"Abdul Raheem",true];
anotherTuple.push(false);
console.log(anotherTuple)


// ReadOnly

let readonlyTuple:readonly [number,string,boolean];
readonlyTuple=[21,"Abdul Raheem",true];

// readonlyTuple.push(false)   Error: Property 'push' does not exist on type 'readonly [number, string, boolean]'.


// Destructuring Tuples
// Since tuples are arrays we can also destructure them.

let destructureTuple:[number,number];
destructureTuple=[21,22];
let [x,y]= destructureTuple;
console.log(x);  // 21
console.log(y);  // 22


// More illustrations

let tuples:[number,string];
tuples=[21,"Abdul Raheem"];
let secondTuple= tuples[1];   // secondTuple has now type string


// You can create a tuple using JavaScript's array syntax:

const failingResponse = ["Not Found", 404];

// but you will need to declare its type as a tuple.

const passingResponse: [string, number] = ["{}", 200];

// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).


// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.

if (passingResponse[1]===200) {
    const localInfo= JSON.parse(passingResponse[0]);
    console.log(localInfo);
}


type staffAccount=[number,string,string,string?];

let staff:staffAccount[]=[
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
]


// When you have a set of known types at the beginning of a
// tuple and then an unknown length, you can use the spread
// operator to indicate that it can have any length and the
// extra indexes will be of a particular type:

type payStubs=[staffAccount,...number[]];
const stubs:payStubs[]=[
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
]
console.log(stubs);
const monthOnePayments = stubs[0][1] + stubs[1][1] + stubs[2][1];
const monthTwoPayments = stubs[1][2] + stubs[2][2];
const monthThreePayments = stubs[2][2];
console.log(monthOnePayments)
console.log(monthTwoPayments)
console.log(monthThreePayments)



// You can use tuples to describe functions which take
// an undefined number of parameters with types:

declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

calculatePayForEmployee(staff[0][0], stubs[0][1]);
calculatePayForEmployee(staff[1][0], stubs[1][1], stubs[1][2]);