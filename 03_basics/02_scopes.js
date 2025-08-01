 if(true){
 let a=10;
 const b=20;
 var c=30;
}
 //console.log(a);//a not defined
 //console.log(b);//b not define
 //console.log(c);//30 


//let and const stays in scope but var came out of scope so avoid var
//NOTE=> scope is curly braces {} when come with func or if/else and mny but not object 

let a=300;
const b=25
//console.log(a)//300
//console.log(b)//25 




//NESTED SCOPE

function one(){
    const name="priyanka";

    function two(){
        const web="you"
        console.log(name)
    }
    //console.log(web)//web is not defined
    //web ka scope upar khtm ho gya h so error
    two();
}

//console.log(one());//priynaka 




if(true){
    name="priyaa";
    if(name==="priyaa"){
        web="youu"
        //console.log(name + web)
    }
    //console.log(web)
}

//console.log(name)


//console.log(add(2))//3 
//can access it before also
function add(n){
    return n+1;
}
//console.log(add(3)) //4

//console.log(sum(1))//cannt access it before bcoz func is store in a const variable 
const sum=function(a){
    return a+2;
}
//console.log(sum(3))//5
