// we will know about the various functions used on Numbers in js


const a = new Number(100)

// various mathematical procedures we can apply are


// console.log(a.toFixed(2)) //to fixed returns the after decimal 2.00

// console.log(a.toPrecision(3)) //returns prcise value for a no. eg 123.9=>124 for 3




// Math functions used


// // abstract returns negative to positive value
// console.log(Math.abs(-4))

// // round roundoffs the value
// console.log(Math.round(4.89))

// // ceil returs the top value of decimal
// console.log(Math.ceil(4.5))

// // floor returnsfloor value of the decimal
// console.log(Math.floor(4.9))

// // min returns minimum value of the array
// console.log(Math.min(4,2,1,10))

// // max returns maximum value of the decimal
// console.log(Math.max(5,19,2,120))



// most imp concept of math
//  random

// it will choose any number between 0 and 1
// it can be used for random nature in die etc
// most imp formula for that could be Math.round *(max-min+1)+min


// console.log(Math.random())
// console.log((Math.random()*10)+1)//for geting no. over 1 usually we get in point so multplied with 10 
//                                 // and added 1 so we cant get zero

// console.log((Math.floor(Math.random())*10)+1)

// to define minimum and maximum value

const min=1
const max=6

console.log(Math.floor(Math.random()*(max-min+1))+min)

// this could be the logic behind the die of 1-6 game 


