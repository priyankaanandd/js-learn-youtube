const arr=["cpp","js","java"]
//arr.forEach((items_in_arr,index,array){})

//for each hmesha ek call back function mangta h toh write that func without writing its name and in paramenter write anything bcoz by def that parameter with iterate over array bcoz of for each func
// arr.forEach( function (item){
//     console.log(item)
//     //cpp
//     //js
//     //java
// } )




// arr.forEach((value)=>{
//     console.log(value)
//     //cpp
//     //js
//     //java
// })



// function func(val){
//     console.log(val)
// }

// arr.forEach(func)
//cpp
//js
//java




// arr.forEach((item,index,a)=>{
//     console.log(index)
//     //0
//     //1
//     //2
//     console.log(a)
//     //['cpp','js','java']
// })





const obj=[
    {
        name:"a",
        age:21
    },
    {
        name:"pia",
        age:22
    }
]


obj.forEach((item)=>{
    //console.log(item.name)
    //a
    //pia
    console.log(item)
    //{ name: 'a', age: 21 }
    //{ name: 'pia', age: 22 }
})


