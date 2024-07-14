// // filter method

// const arr=[1,2,34,5,6,7,8,99,112]

// // const newar =arr.filter( (item)=> item<3)
// const newar =arr.filter( (item)=> {
//        return item<3}
//     )       //while using curly braces always use return

// console.log(newar)








//.............................  intresting filter use case  ............................................


// const Books =[
//         {Title :" book1 ",
//          Genre:"History",
//          Publish:1981,
//          Edition:2004
//         },
//         {Title :" book2 ",
//          Genre:"NonFiction",
//          Publish:1990,
//          Edition:2007
//         },
//         {Title :" book3 ",
//          Genre:"History",
//          Publish:2000,
//          Edition:2004
//         },
//         {Title :" book4 ",
//          Genre:"Fiction",
//          Publish:1999,
//          Edition:2012
//         },
//         {Title :" book5 ",
//          Genre:"Science",
//          Publish:2010,
//          Edition:2016
//         },
//         {Title :" book6 ",
//          Genre:"NonFiction",
//          Publish:2002,
//          Edition:2004
//         },
//         {Title :" book7 ",
//          Genre:"Fiction",
//          Publish:2010,
//          Edition:2020
//         }

// ]


// const NewBL= Books.filter( (book)=> 
//         {
//             if (book.Genre==='History' || book.Genre==='Fiction'){
//                 return book
//             }

//         }
// )

// // console.log(NewBL)

// const Publ=Books.filter(  (book) => book.Publish>=2000 && book.Genre==="History")

// console.log(Publ)




                // ........Map Method..................



const Arr=[1,2,3,4,5,6]

// const newar= Arr.map( (item) => item+10 )



//   chaining in maps

const newar= Arr.map( (num)=> num +1 ).map( (num)=>num*10 ) //you can also add another methods in a chain 
//you can use filter aalon with chain of maps
 
// console.log(newar)







                // Reduce Method need to be used  


const Ar1=[1,2,3,4,5]

// const Newnum=Ar1.reduce(  (acc,curr)=> {
//         console.log(`${acc} is acc , ${curr} is curr`)
//         return acc+curr

// },0   )

// console.log(Newnum)


// or

const Newnum=Ar1.reduce( (acc,curr)=> acc+curr ,0  )

// console.log(Newnum)


//   case study for reduce

const Course= [
            {
                CourseName:"Mern",
                Price:299
            },
            {
                CourseName:"Cyber",
                Price:499
            },
            {
                CourseName:"Blockchain",
                Price:999
            }

]

const TotalPrice = Course.reduce(  (acc,item)=> acc+item.Price   ,0  )


console.log(TotalPrice)