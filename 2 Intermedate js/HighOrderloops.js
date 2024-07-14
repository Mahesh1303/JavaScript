// use for of loop while using arrays and maps but not in objects

const mp=new Map()

mp.set('Name',"Mahesh")
mp.set('id',21)
mp.set('email',"xyz@gmail.com")

// console.log(mp)
// for (const [keys,value] of mp) {
//     console.log(keys + " : "+ value)
    
// }



// for in loops for object



// High Order Array Loops

// const arr =[1,2,3,34,4]

// arr.forEach( (item) =>{console.log(item)} )

// accessing array made of objects  mostly required for database


const Coding=[
        {
            Programminglanguage:"Javascript",
            filename:"js"
        },
        {
            Programminglanguage:"Java",
            filename:"java"
        },
        {
            Programminglanguage:"Python",
            filename:"py"
        }

]

Coding.forEach( (index)=>{
    console.log( index.Programminglanguage )
})

