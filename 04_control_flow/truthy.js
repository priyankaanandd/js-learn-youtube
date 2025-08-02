//there are certain values who are assumed the be true or false called truthy or falsy values 

// const name=""

// if(name){
//     console.log("got user email")
// }
// else{
//     console.log("dont have euser email")
// }
//dont have user email


// const name1=[]

// if(name1){
//     console.log("got user email")
// }
// else{
//     console.log("dont have euser email")
// }
//got user email


//in emeprt string go no email
//in empty array got user email


//FALSY VALUE
//false,0,-0,BigInt,0n,"",null,undefined,Nan


//TRUTHY VALUE
//"0",'false'," ",[],{},function(){}





// const arr=[];
// if(arr.length==0){
//     console.log("empty")//empty 
// }




// const obj={}
// if(Object.keys(obj).length==0){
//     console.log("obj is empty")//obj is empty
// }




//Nullish coalescing operator(??)
//works for null undefined

let val1;
//val1=5??10
//console.log(val1)//5

//val1=null??10
//console.log(val1)//10


// val1=undefined??10
// console.log(val1)//10


val1=null??null??5
console.log(val1)//5




//TERNARY OPERATOR
//condition?true:false


const ice=100
ice>=100?console.log("true"):console.log("false");
//true 





 


