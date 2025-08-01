//js execution concepts

//1=> whenever we give code to js global exec context bnta hi bnta h and this varialbe k andar us content ko rkh dia jaata n
//this ki value is window object in browser
//TYPES
//1 =>GEC (global exec context)
//2=>FEC func exec context
//3 eval exec context




//js code runs in 2 phase
//1 memory creation phase
//in this phase jo bhi hm declare krte h uske liye memory allot hoti h koi execution nhi hota h kisi operation ka
//2 execution phase 


let a=10;
let b=20;
function sum(a1,b1){
    let total=a1+b1
    return total
}
let res=sum(a,b)
let res2=sum(1,2)
console.log(res)//30
console.log(res2)//


//HOW THIS runs
//1 jo bhi code run ho vo global exec or global env se hoga aur use this k andar daala ajega

//2 memory creation 
//val1->undefined,val2->undefined
//addnum->func ki defination jo bhi poora func h

//3  result1->undefined result2->undefined


//execution phase
//val1 <-10
//val2<-5
//res<-sum func now creates its seperate exec context in this context it have (new varialbe env + env thread)

//now this has both memory and exec phase
//memory phase val1->undefined ,val2->undefied ,undefined
//execution context
//a1-10 b1-5 totao 15
//this total is returned to gloab exec context


//now this new exec context created durinf func call get delete since the func is done



//res-15

//sum(1,2) again new exec context(new var env+env thread) 
//a1->undefied ,b2undefined
//execution context
//a1-1 b1-2 totao 3
//this total is returned to gloab exec context



//call stack

