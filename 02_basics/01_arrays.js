// array
/*
const arr=[1,2,4,24,"true",true]
console.log(arr);
console.log(arr[4]); //true 0based indexing h

//agar hm iski copy bnaege to v oshallow hogi deep nhi 
//shallow copy vo hoti h mtlb usi orig arrpe refer hogaa mtlb usi mei chsnge hogaaa

//methods 
const a=new Array("priya","riya")
console.log(a.length);//2
//NOTE array mei bhi prototype hote h
a.push(6);
a.push(true)
console.log(a); //[priya,riya,6,true]
a.pop() //remove last value of arr
console.log(a)//[priya riya 6]
a.unshift(true);
console.log(a);//[true,priya,riya,6] ye value start mei add hofi
a[0]=1;
console.log(a);//[1,priya,riya,6]
a.shift();
console.log(a)//[priya ,riya,6] ab pehli value remove hogi hmesha 

console.log(a.includes('riya'));//true
console.log(a.indexOf(1))//-1 bcoz it doesnt ecist
console.log(a.indexOf('priya'))//0
*/


// const a=[1,2,4,3]
// const b=a.join()

// console.log(a)//[1,2,4,3]
// console.log(b)//1,2,4,3
// console.log(typeof(b))//string
// console.log(typeof(a))//object
//so join hmare arr ko string bna deta h




//slice and spice
const arr=[1,2,3]
console.log("A",arr) //2 [1,2,3]
const b=arr.slice(1,2)//2 not include [2]
console.log("B",b) //B [2]

const c=arr.splice(1,3)
console.log("C",c);

//NOTE slice donot change the orig array but splice does change 
//in slice end idx is not includes
const ar = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4);  // [2, 3, 4]

console.log(sliced); // [2, 3, 4]
console.log(ar);    // [1, 2, 3, 4, 5] → original unchanged

//in splice the element are remove form the mentioned index including the last idx
