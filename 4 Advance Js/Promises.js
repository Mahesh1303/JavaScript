// Promises is a type of objectwhich represents completion or failure of anoperation its like exception handling

// usual method fun.promise().then().catch()
// promises are of three types:
//   pending: State neither fullfilled nor rejected
//   fullfilled : meaning that the operation was completed successfully
//   Rejected :meaning that the opearation failed


// const promise1= new Promise( function(resolve,reject){

//     setTimeout(()=>{
//         console.log("this will be called after 3sec")
//         // connecting this to resolve so that it can e implemented in then
//         resolve()
//     },3000)

// } )

// // then is used when the promise's function uses resolve or when the siuation has been resolved

// promise1.then( ()=>{
//     console.log('promise resolved')
// })  // then comes with a call bacck function



// Another way to envoke this is by
// new Promise( function(resolve,reject){

//     setTimeout(()=>{
//         console.log("this will be called after 3sec")
//         // connecting this to resolve so that it can e implemented in then
//         resolve()
//     },3000)

// } ).then(()=>{
//     console.log('promise resolved')
// })




// Passing  parameters to the the resolve
// const promise1= new Promise( function(resolve,reject){

//         setTimeout(()=>{
//             console.log("this will be called after 2sec")
          
//             resolve({
//                 name:"Mahesh",
//                 email:"xyz@gmail.com"
//             })
//         },2000)
    
//     } )
    
   
    
//     promise1.then( (user)=>{
//         console.log(user)
//     })  

// use catch method for reject one which is used when the error occurs
// const promise4 = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     let error = true;
//     resolve({
//       name:"Mahesh",
//       roll:17
//     })
//     if(!error){
//       resolve({
//         name:"Mahesh",
//         roll:17
//       })
//     }
//     else{
//       reject("Error Detected ")
      
//     }
//   })
// })
   
// promise4.then((user)=>{console.log(user)}).catch((user)=>{console.log(user)}) used for error condition


// to fectch Data from the the resolve 

// finally is used when the promise is completed

// promise4.then((user)=>{
//     console.log(user)
//     return user.name
// }).then((user)=>{console.log(user)}).catch((error)=>{console.log(error)}).finally(()=>{
//   console.log("the promise has now been resolved")
// })


// Async await

// const promise5 = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     let error = true;
   
//     if(!error){
//       resolve({
//         name:"Mahesh",
//         roll:17
//       })
//     }
//     else{
//       reject("Error Detected ")
      
//     }
//   })
// })


// // Async Await : Waits for some time to complete the process else gives error

// async function val(){
//   try {// await holds the value provided by .then oor catch
//       const respo= await promise5 
//       console.log(respo)
//   } catch (error) {
//       console.log(error)
//   }
// }
// val()


async function User(){
  try {
     const respo=await fetch('https://jsonplaceholder.typicode.com/users')
     const data= await respo.json()
     console.log(data)
  } catch (error) {
    console.log(error)
  }
}
User()

async function Fetch(){
  fetch('https://jsonplaceholder.typicode.com/users').then((respo)=>{
    return respo.json()
  }).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})
}