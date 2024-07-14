function testchecker(name,role) {
    switch (role) {
        case "Admin":
            console.log(`u have all access ${name}`)
            break;
        case "preparer":
        console.log(`u can only create test ${name}`)
            break;
        case "student":
            console.log(`u can only apply for test ${name}`)
            break;
    
        default :
            console.log(`u need to confirm role ${name}`)
            break;
    }
    
}

testchecker("mahesh","Admin");
testchecker("xyz","preparer");
testchecker("pqr","student");
testchecker("abc","dont know")



// another way of declaring fnction

// const myfun=function(){console.log("hello I am Mahesh")}



// myfun()