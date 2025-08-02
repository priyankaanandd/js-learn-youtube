//FOR IN loop
//for object not array
//for map no output it gives
// const obj={
//     name:"priya",
//     age:"21",
//     year:"3rd"
// }

// for (const key in obj) {
//     //console.log(key);
//     //name
//     //age
//     //year

//     //console.log(obj[key])
//     //this is to acces value
//     //priya
//     //21
//     //3rd

//     console.log(`${key} is ${obj[key]}`)
//     //name is priya
//     //age is 21
//     //year is 3rd
//     }





// const arr=[12,3,4]
// for(const b in arr){
//     console.log(arr[b])
//     //12
//     //2
//     //4

//     console.log(b)
//     //0
//     //1
//     //2

// }



const map=new Map()
    map.set('priya',1),
    map.set('riya',2)

for(const[key,value] in map){
    console.log(`${key} is ${value}`)
}
//gives no output 
//for in is for objects not map or array
