// Everything in Js is made of objects object is the highest level of absraction in js
// that is any data type is a data type in itself as well as it is an object 

function CreateUSer (username,userid){
    this.username=username
    this.userid=userid
}

CreateUSer.prototype.conca= function(){
    this.userid++
}
CreateUSer.prototype.printme= function(){
    console.log(`this user is ${this.username} , the id of the user is ${this.userid}`);
}
// after adding prototype some more functionalities will be added into the object of that function so it will be a new function
const member= new CreateUSer("Mahesh",21)

member.conca()
member.printme()