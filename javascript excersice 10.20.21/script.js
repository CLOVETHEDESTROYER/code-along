/*
var doNotUse = true


if (doNotUse === "true" {
    console.log("Dont use VAR!")
}   else {
    console.log("why not")
}*/

/*
let foo = 13;
let bar = "13";

console.log(foo == bar);
console.log(foo === bar);*/

/*
functions*/

function doSomething(parameter, parameter2) {
    return parameter + "and" + parameter2 + " is the answer to life"
}

console.log(doSomething(" pizza ", " donuts "));


/*
Fizz Buzz
if divisible by 3, fizz
if divisible by 5, buzz
if divisible by both, fizzBuzz
*/



/*function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if(i % 15 === 0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(i);
        }

    }
}*/

/*
function makeAPICall() {
    const request = new XMLHttpRequest()

    return new Promise(resolve, reject) => {
        request.onreadystatechange = (e) => {

        }
    }
}
*/

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded and parsed.");
})

window.addEventListener('load', (event) =>
console.log("Everything is ok"))

