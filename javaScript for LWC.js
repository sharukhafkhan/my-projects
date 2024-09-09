// Java script learning path
/**
 * variables
 * Data types
 * Null vs undefined
 * Arrow function
 * spread operator
 * Destructing
 * String interpolation
 * String methods
 * object methods
 * Array methods
 * Promises
 * Modules import and export
 * events
 * setTimeoout vs setInterval
 * Query selector
 *
 */

// Variables
console.log("testing javascript");
var x=10;
x=null
console.log(x);
//Null vs undefined 

var x=null;
console.log(x);
var y;
console.log(y);
console.log(typeof x);
console.log(typeof y);

// spread operator
//array
var arr=[1,2,3];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3])
arr.push(4);
console.log(arr[3])

// object 
var obj={
    "name":"khan",
    "age":28,
    "last part": "pathan"
}

console.log(obj.name)
console.log(obj["last part"]);

console.log(obj);

//detructuring
// array destutering 

var arr2=["afkhan","pathan","khan"];
// normal way
let name1=arr2[0];
console.log('name1'+name1)
let name2=arr2[1];
console.log('name2'+name2)
let name3=arr2[2];
console.log('name3'+name3)

//destrucring
var [name4,name5,name6]=arr2; 
console.log(name4);
console.log(name5);
console.log(name6);

//String Interpolation
