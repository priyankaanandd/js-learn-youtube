const arr = ["js", "ruby", "java", "python", "cpp"]



// const val=arr.forEach((item)=>{
//   console.log(item)
//   //js
//   //ruby,,,,,,
// })
// console.log(val)//undefined
 



// const val=arr.forEach((item)=>{
//   console.log(item)
//   return item
//   //js
//   //ruby
// })
// console.log(val)//undefined
//here is a problme that if we store the value of forEach loop and try to return it gove undefined



//**********filter */
const num=[1,2,3,4,5,6,7,8,9];
// const a=num.filter((num)=>num>5
// )
//[6,7,8,9]


// const a=num.filter((num)=>{
//   return num>4
// })
// console.log(a)
//[5,6,7,8,9]

const a=num.filter((num)=>{
   num>4
})
console.log(a)//[]
//hmne scope open krdiaa toh return keyword use krna hi pdegaa 








const newnum=[]

num.forEach((a)=>{
  if(a>4)
    newnum.push(a)
})

console.log(newnum)
//[5,6,7,8,9]