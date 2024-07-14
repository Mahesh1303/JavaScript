// Objects within objects


const A={name:"Mahesh",
          email:"mahesh@gmail.com",

          Fullname:{
            firstname:"Mahesh",
            Middlename:"Deepak",
            Lastname:"Divate"
          }


}

// to access these objects we can use multiple .  notations

// console.log(A)
// console.log(A.name)
// console.log(A.Fullname.firstname)
// console.log(A["Fullname"]["firstname"])




// adding 2 objects

const obj1={1:"A",
            2:"B"
}
const obj2={3:"c",
            4:"d"
}
const obj3={5:"e",
            6:"f"
}

// to assign we use the Object assign method

const Obj4=Object.assign({},obj1,obj2,obj3)   //use {} at starting is preferred

// console.log(Obj4)

// we can also use another method for this same like array using ... Notation 
const Obj5={...obj1,...obj2,...obj3}

// console.log(Obj5)


// Usually when values comes from database it is in the format of arrays which consist of objects

const A1=[
        {id:"Mahesh",
         email:"xyz@gmail.com"
        },
        
        {id:"User2",
         email:"xyz@gmail.com"
        },
        
        {id:"User3",
         email:"xyz@gmail.com"
        }
]
// to access this 

// console.log(A1[0].email)


// some imp methods of objects


// console.log(Object.keys(Obj4)) 

//this method retrns the keys of an oobject usually it is required for giving loop and accessing values
                            //   it returns it in thhe form of array so a loop can be applied on the array to access all other values
                        

//Another method to check wether a key is present in the object is

console.log(Obj4.hasOwnProperty("use"))
