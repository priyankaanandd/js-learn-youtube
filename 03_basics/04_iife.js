//immediately invoked func expression IIFE

//1jo func likha h usee immediate run krwana 
// 2 global scope se pollution na ho koi

function func(){
    console.log("DB connected")
}
//func()//DB connected 


(function func(){
    console.log("DB connected")
})();
//ek parentheses func ko wrap krne k liye ek execute krwane k liee
//DB connected 
 



(()=>{
    console.log("hi")//hi
})();
//error


//this is name iife 
(function func1(){
    console.log("hi")//hi
})();
//error


//this is simple iife
( ()=>{
    console.log("h")//h
})();
//make sure tu put ; after () bcoz hme end krna chahie pehle code ko tbhi doosra code run krega


//this is parameter with iife
( (name)=>{
    console.log(`h ${name}`)//h
})('priya');//h priya