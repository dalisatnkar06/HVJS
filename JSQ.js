//  question 1

// for (let i = 0; i < 20; i += 2) {
//     if (i % 6 !== 0) {
//         console.log(i)
//     }
// }

// question 2

// let a=[4,7,2,9,5]
// let arr=a.map(number=>number*2);
// console.log(arr)

// question 3

// let num=[1,2,3,4,5,6,7,8,9]
// let n=num.filter((a)=>{
//   return a%2==0
// })
// console.log(n)

// question 4

// let a=[1,2,3,4,5,6,7,8]
// let b=a.reduce((c1,c2)=>{
//   return c1+c2
// })
// console.log(b)

// question 5

// let list=[19,68,34,33,71]
// let even=list.find(number=>number%2==0);
// console.log(even)

// question 6

// let shopping = [
//     { item: 'Shirt', price: 25, onSale: false },
//     { item: 'Jeans', price: 50, onSale: true },
//     { item: 'Shoes', price: 80, onSale: false },
//     { item: 'Hat', price: 15, onSale: true }
// ];

// let sum = 0;
// for (let a of shopping) {
//     let prices = a.price;
//     if (a.onsale == true) {
//         prices = a.price - prices;
//     }
//     sum = sum + prices;
// }
// console.log(sum);