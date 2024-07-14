// immediately invoke function after creation
// this type of functionsa are usually created because the code can pollutted till it reaches function call

//major idea (//for function)(//for call)

(function call()    
    {console.log("i am invoked ")}
)();     //always end the function execution because code dont know where to end it


// to pass parameters we can pass it as follows
(function call2(name)    
    {console.log("i am invoked "+name)}
)("mahesh");  