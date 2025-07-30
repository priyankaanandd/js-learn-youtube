//string can be donated by single or double quote
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); hitest50 value

console.log(`hello my name is ${name} and my repocount is ${repoCount}`)
//another way of defining string this is string object
const gameName = new String('hitesh-hc-com')
console.log(typeof gameName)//object
// console.log(gameName[0]);bcoz key value paid
 console.log(gameName.__proto__);//{}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//it has heap mem bcoz obj but here orig value does not change bcoz string are immutable 
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

//slicing 
// const newString = gameName.substring(0, 4)//hite
// console.log(newString);

const anotherString = gameName.slice(-2, -1);
console.log(anotherString);
//in slice we can give neq value and for neg it start from rev
//in subs if we put neg it ignores and simply starts from 0

// const newStringOne = "   hitesh    "
// console.log(newStringOne);"   hitesh    "
// console.log(newStringOne.trim());"hitesh" trims the start endin spaces

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) replace 20 in url with-

// console.log(url.includes('sundar')) false

// console.log(gameName.split('-')); based on - jahan jahan - vahan se string split hojae