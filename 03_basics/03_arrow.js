// const { Suspense } = require("react")

// const user={
//     name:"priya",
//     age:99,
//     welcomemessage :function(name){
//         console.log(`${this.name },welcome to page`)
//         //if i dont write this it give undefined welcome to the page
//         //this refers to current context here it is name in user object 
//         //this us scope mei jo var h unko refer kregaaa
//         console.log(this)
//         //{ name: 'tushar', age: 99, welcomemessage: [Function: welcomemessage] }
//     }
// }
// user.name="tushar"//yahan hmne current context change krdiaa this refer to context 
// //user.welcomemessage()//tushar welcome to the page



// //
// //console.log(this)//{ } bcoz this is regerring to nothing in scope here 





// function chai(){
//     let name="priya"
//     console.log(this.name);//undefined
//     //it means this works perfectly in object only not in functiom
// }
// //chai()
// function chai(){
//     let name="priya"
//     console.log(this);//return a lot of random stuff
// }
// //chai()
// //when this is  called in function it return a lot of random values here 





// //this is arrow function
// // const hi = () =>{
// //     let name="riya"
// //     console.log(this)//{}
// //     console.log(this.name)//undefined
// // }
// //hi()


const add=(a,b)=>{
    return a+b;
}
console.log(add(1,6));//7


//implicit return

const a=(a,b)=>  a+b;
const b=(a,b)=>(a+b);//3 
//curly brace use kro to return likhna pdega and () use kro toh no return needed 
//ye ek hi line mei h so no need of writing return ie implicit return 
//console.log(b(1,2))//3



const func=(a,b)=>{username:"ritesh"}
console.log(func(1,2))//undefined
//bcoz return bina likhe return krne k lye use ()


const func2=(a,b)=>( {username:"ritesh"})
console.log(func2(1,2))//{ username: 'ritesh' }


const arr=[2,3,2,5]
arr.forEach(=()=>)
