//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const a=100
const b=100.3
let c; //here c is undefined 
//both are in Number cateogry nothing special for decimal
//so js is dynamically typed bcoz here not define sreing int for varibale
const id=Symbol('123')
const id2=Symbol('123')
console.log(id)//Symbol(123)
console.log(id==id2)//false bcoz even if values are same symbol gives uniques values
const num=121224353455736n
//last mei n lgane se datatype is bigInt




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
//obj in curly braces
//function(){} this is a func defining
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction); //function
console.log(typeof heros);//object
console.log(typeof myObj);//object
console.log(typeof id2);//symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3