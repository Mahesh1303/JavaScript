// in js we have different context as weget diff outout for different

var myname="mahesh";
if(myname==myname){
    console.log("true ");
}

// will give error if we use windows.myname instead 
// but it will return if we use it in we console

// var myname="mahesh";
// if(myname==window.myname){
//     console.log("true ");
// }
// this can only be used in console
