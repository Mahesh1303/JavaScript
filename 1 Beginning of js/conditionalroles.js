var user ="admin";

switch (user) {
    case "student":
        console.log("u can only apply for the test");        
        break;
    case "testmaker":
        console.log("u can only provide test");
        break;
    case "admin":
        console.log("u can manipulate the application");
        break;
    
    default:
        console.log("u should confirm what u are");
        break;
}