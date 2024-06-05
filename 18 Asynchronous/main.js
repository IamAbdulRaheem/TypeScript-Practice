/***********************************
    * ASYNCHRONOUS PROGRAMMING *
 ***********************************/
// Asynchronous: In ansynchronous programming Code execution allows multiple operations to run concurrently.Operations do not wait for previous ones to complete and can proceed with other tasks.
// Examples: Function callbacks, promisses, setTimeout()
// Function CallBacks
function executeCallBack(initialText, callBack) {
    return callBack(initialText);
}
// their are two methods: either you pass the function directly in the main function as an argument or define another function both have same output
// 1
executeCallBack("I am Abdul Raheem", (text) => {
    console.log(text);
});
// 2
function funForCallBack(text) {
    console.log(text);
}
executeCallBack("I am Abdul Raheem", funForCallBack);
// interface in callbacks
const greetings = (message) => { console.log(`Hello ${message}`); };
function sayHello(callBack) {
    callBack("World!");
}
sayHello(greetings);
function callBackInterface(message) {
    console.log(`Hello ${message}`);
}
function sayWorld(callBack) {
    callBack("World!");
}
sayWorld(callBackInterface);
// Promises
function delay(milliSeconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliSeconds);
    });
}
delay(1000).then(() => {
    console.log("Done!");
}).catch((error) => {
    console.error("Something went Wrong!", error);
}).finally(() => {
    console.log("This is always done!");
});
// The same can be done using async/await
try {
    await delay(1000);
    console.log(`Await: The delay is over!`);
}
catch (error) {
    console.error(`Await something went wrong! ${error}`);
}
finally {
    console.log("This is finally done!");
}
export {};
