
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName// no output bcoz it refrence to func
//sayMyName()//op bcoz here it execytes the func bcoz of ()

function add(number1,number2){
    console.log(number1+number2);

}
// add() //NaN
// add(1,2)//3
// add(1,"2")//12
// add("1",2)//12
// add(1,"a") //1a
// add(3,null)//3

//what we pass th the func in call is arg and in func def they r parameters 


//const res=add(1,2)
//console.log(res)//3


function sum(num1,num2){
    const ans=num1+num2;
    return ans;

}
const a=sum(1,12);
//console.log(a)//13


func=function(a){
    if(!a){//(a===undefined){
        console.log("please enter a username")
        return 
    }
    return `${a} just logged in`
}

//console.log(func())//priya just logged in

//there  are situations where we can add any nos of prameter 

function func1(...num1){
    return num1;

}
//here ... is rest operator 
//it means all the item can be any no pack them in bundles
//
//console.log(func1(12));//12


//console.log(func1(12,23,424,2,4))//[12,23,424,2,4]




const func2=function(num1,num2,...num3){
    //return num3//[3,1,52,52,5]
   // return num2 //2
    return num1 //1
}
//console.log(func2(1,2,3,1,52,52,5))



const obj={
    name:"Riya",
    age:23
}

function f(anyobj){
    return  `username is ${anyobj.name} and age is ${anyobj.age}`
}

//console.log(f(obj))
//username is riya and age is 23



const arr=[1,2,3];
function f1(a){
    return a[1];
}
//console.log(f1(arr))//2
console.log(f1([1,[2,3],4]))//[2,3]