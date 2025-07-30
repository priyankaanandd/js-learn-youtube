/*const num=100;
console.log(num);//100

const nu=new Number(100);
console.log(nu);//[Number: 100]
console.log(nu.toString());//100
//console.log(nu.toNumber());//func donot exists 
console.log(nu.toFixed(6));//100.000000 precision 


const a=23.64533;
console.log(a.toPrecision(1));//precise krti h us lentth  tk value ko 

const b=1000000;
console.log(b.toLocaleString('en-IN'));//10,00,000
//enin is acc to india srtd and ye func comma lgata h bs 

//***********MATHS*********

console.log(Math);//object[Math]

console.log(Math.abs(-4));//4 
console.log(Math.round(2.333546464));//2 round of krta h
console.log(Math.ceil(4.36446));//5
console.log(Math.floor(4.3536));//4
console.log(Math.min(4,2,5,2));*/
//2 smlry there is max func also 
console.log(Math.random());//hmesha 0 or 1 k beechmei value aaaega random//0.8....
console.log(Math.random()*10+1);//7.3......
//+1 bcoz value 0 bhe ho skta h toh *10 ka kuch significsnce nhi rhega 

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
//max-min ti specify range +1 to avoid ans 0 and +min to make it above min always 
