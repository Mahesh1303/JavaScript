//  Concatination methods for array

// push this makes another array as sub string
// const a1=[1,2,3,4,5]
// const a2=[6,7,8,9]

// a1.push(a2)
// console.log(a1) 

// concat this adds elements of other array into the array but need to store it in another array

// const a3=a1.concat(a2)

// console.log(a3)

// we can also use spread operator for adding two arrays

// const a3=[...a1,...a2]
// console.log(a3)


//suppose we have subarrays in array we can unsub them using flat operation

// const b1=[1,2,3,4,[5,6,7],[8,9,10,[13,14,15]]]

// const b2=b1.flat(Infinity)
// console.log(b2)




// Array usage for data scraping

//from =>for converting single object into array
// of=>for converting the set of values into array
// isarray => for checking if the value is array type or not


console.log(Array.from("Mahesh"))
const a=100
const b= 200
const c=300
console.log(Array.of(a,b,c))

console.log(Array.isArray("mahesh"))





