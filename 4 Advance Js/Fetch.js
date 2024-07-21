// This is about how a fetch works 

// Whenever We add fetch the call stackk alocates special queue or priority queue to the all methods of the fetch
// this queue is a special queue this will execute before any setTimeout function
// 


// During execution of Fetch it is mainly dvided into two parts
// 
// Data
// Onfullfilled
// OnRejection


// on node or browser for api request
// on success it will go to the Onfullfilled part 
// on rejection it wil go to the On rejection part
// On fullfilled we perform operations whose result is then stored in data field which is then stored in the gobal execution context
// all thee errors will go in onfullfilled field because it shows that request was sent and the response was not found
// the functio in onfullfiedd fills the data field

