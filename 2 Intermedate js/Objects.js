// objects id like key value pairs which provide key value access 
// to declare symbol

const sy=Symbol("key1")

const Obj={
    name: "Mahesh",
    email:"mahesh@gmail.com",
    age:21,
    [sy]:"symb"

}

//to access we can either use . operator but mostly  [] this method is used 

// console.log(O.age)

// console.log(O["name"])
//to actually treat objects apply square brackets
// console.log(typeof(Obj[sy]))
// console.log(O)


// to change values of ibj we can use
Obj.age=22
// console.log(Obj["age"])
// console.log(Obj)
// // to freeze further changess in the obj we can use the following method

// Object.freeze(Obj)
// any further changes couldnt be made to the object
Obj.age=23
// console.log(Obj)


// creating a function with object
Obj.greeting=function(){
        console.log(`Hello ${this.name}`)
}

// this keyword is used to refer to the  properties of same object


console.log(Obj.greeting())