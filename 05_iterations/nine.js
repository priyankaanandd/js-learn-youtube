const myNums = [1, 2, 3]


const total=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and curr:${currval}`)
    return acc+currval;
},0)
console.log(total)
// acc:0 and curr:1
// acc:1 and curr:2
// acc:3 and curr:3
// 6



// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);