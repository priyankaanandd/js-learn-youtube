// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


 console.log("2" > 1);//t

 console.log("02" > 1);//t

console.log(null > 0);//f
console.log(null == 0);//f
console.log(null >= 0);//t
//comparison op and equality check works diff comparisio conv null to a number so >=0 gives t and ==0 f

console.log(undefined == 0);//f
console.log(undefined > 0);//f
console.log(undefined < 0);//f

// === 
console.log("2"==2)//t
console.log("2" === 2);//f bcoz double ewual check that data type is same or not