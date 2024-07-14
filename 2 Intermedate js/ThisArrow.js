// this operator only works in Objects But not inside a function

const User={
    Username:"Mahesh",
    email:"xyz@gmail.com",
    Welcome:function(){
            console.log(` Welcome  ${this.Username}`)
            console.log(this)
    },

    
}

// User.Welcome()
// console.log(this) //this denotes the node environment object it will be different for webconsole


// for functions

// function  try1(){
//     console.log(this)

// }
//this will retrive the global scoper


// Arrow fuctinons just replace the "function ()"   with  "()=>"


// const add= (num1,num2) => {return num1+num2} //explicit return
// console.log(add(1,2))

//you can either write this way but in react we should only use
const add = (num1,num2)=>(num1+num2) //imolicit return
console.log(add(1,2))

