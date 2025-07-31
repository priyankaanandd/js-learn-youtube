// singleton
//NOTE=> agar object literal se baenge to singleton nhi bnega agar constructor se toh singleton bnega

//constructor method                   
// Object.create

// object literals



//object is nothing but curly braces 
//in object there are key value pairs 
const sym1=Symbol("key")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [sym1]: "mykey1",//syntax agar as a symbol use krna h
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}




//  console.log(JsUser.email)
//  console.log(JsUser["email"])//histesh.....
//  console.log(JsUser["full name"])//histest cha...
//  console.log(JsUser["age"])//18
//  console.log(JsUser[mySym])//myKey1

//keys ko as string input dena pdegaa [] ismee

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);
//here email is still gpt.com bcoz of freeze
//freeze makes sure that no value of obj is changeable 
// {
//   name: 'Hitesh',
//   'full name': 'Hitesh Choudhary',
//   age: 18,
//   location: 'Jaipur',
//   email: 'hitesh@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key)]: 'mykey1'
// }
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//this jo bhi object h uski saaari prop ko refre krskta h

console.log(JsUser.greeting());//hello js user
//console.log(JsUser.greeting)//[function(anonymous)]
//function exec nhi hua bs uska refrence aaya 
console.log(JsUser.greetingTwo());//hello jsuser,hitesh


myfunc=function(){
    console.log("hi")
}
console.log(myfunc())//hi