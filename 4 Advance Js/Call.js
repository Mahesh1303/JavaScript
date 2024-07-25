function Calluser(username){
    this.username=username
}
function userData(username,id,password){
    this.id=id;
    this.password=password
    Calluser.call(this,username)//call is used for refrencing the user and this is used to refrence the conteext of the function called
}

const person= new userData("mahesh",21,"xyzzz")
console.log(person)