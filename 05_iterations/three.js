// for of
//in map it works in array ,strings
//["","",""]
//[[],[],[]]
const arr=[1,2,3,4]
//for (const element of object) {
    
    //this loop is not only for object here object is not just {} this but a borader term 
    //here the object is arr and element arer the numbers in arr
//}

// for(const a of arr){
//     //here a refers to the number in array 
//     console.log(a)
//     //1
//     //2
//     //3
//     //4
// }




// const string="hello worls"
// for(const a of string){
//     console.log(`each char of string is ${a}`)
// }


                 //MAPs
//map holds  key value pairs
//maintains the original order of insertion
//doesnt stores duplicate

const map=new Map();
//to assign key value pair in map
map.set('priya',[1,2,3])
map.set('riya','2')
map.set('ishu','3')

console.log(map)
//Map(3) { 'priya' => [1,2,3], 'riya' => '2', 'ishu' => '3' }



// for(const key of map){
//     console.log(key)
//     //[ 'priya', 1 ]
//    //[ 'riya', '2' ]
//    //[ 'ishu', '3' ]
// }

// for(const [key,value] of map){
//     //console.log(key)
//     //priya
//     //riya
//     //ishu  
//     //console.log(value)
//     //1
//     //2
//     //3
//     console.log(key,",",value)
//     //priya , 1
//     //riya , 2
//     //ishu , 3
// }



const obj={
    name:"priya",
    age:"21",
    year:"3rd"
}

// for(const a of obj){
//     //console.log(a)
//     //obj is not iterable
// }


// for(const[key,value] of obj){
//     console.log(key ,",",value)
//     //error obj is not iterable 
// }


//NOTR=>for of is not working on objects

