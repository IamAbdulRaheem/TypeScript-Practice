        /***********************************
            * ASYNCHRONOUS PROGRAMMING * 
         ***********************************/


// Asynchronous: In ansynchronous programming Code execution allows multiple operations to run concurrently.Operations do not wait for previous ones to complete and can proceed with other tasks.

// Examples: Function callbacks, promisses, setTimeout()


// Function CallBacks

function executeCallBack(initialText:string,callBack:(text:string)=>void) {
    return callBack(initialText);
}
// their are two methods: either you pass the function directly in the main function as an argument or define another function both have same output

// 1
executeCallBack("I am Abdul Raheem",(text:string)=>{
   console.log(text);
})

// 2
function funForCallBack(text:string) {
    console.log(text);
}
executeCallBack("I am Abdul Raheem",funForCallBack);


// interface in callbacks

const greetings= (message:string)=>{console.log(`Hello ${message}`)}

interface definitionInterface{
    (message:string):void
}

function sayHello(callBack:definitionInterface){
    callBack("World!");
}

sayHello(greetings);


// Use of generics for calltype in typescript

interface callBackOneParameter<type1,type2=void>{
    (type1:string):type2;
}

function callBackInterface(message:string){
    console.log(`Hello ${message}`);
}
function sayWorld(callBack:callBackOneParameter<string>) {
    callBack("World!")
}
sayWorld(callBackInterface);





// Promises

function delay(milliSeconds:number):Promise<void> {
    return new Promise<void>((resolve)=>{
        setTimeout(() => {
            resolve()
        }, milliSeconds);
    });
}
delay(1000).then(()=>{
    console.log("Done!")
}).catch((error)=>{
    console.error("Something went Wrong!",error);
}).finally(()=>{
    console.log("This is always done!")
});


// The same can be done using async/await

try{
    await delay(1000);
    console.log(`Await: The delay is over!`)
}catch(error){
    console.error(`Await something went wrong! ${error}`)
} finally{
    console.log("This is finally done!");
}