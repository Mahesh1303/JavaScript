// this could be the most imp topic for basic
// this is used for scheduling countng timespan 
// comparing timespan
// scheduling something
// Generally used in Hotel Mangement websites booking websites and many more applications can be found here


let Mydate = new Date()

// console.log(Mydate.toDateString())
// console.log(Mydate.toISOString())
// console.log(Mydate.toJSON())
// console.log(Mydate.toLocaleDateString())
// console.log(Mydate.toLocaleString())
// // passing own dates

// let Setdate =new Date(2024,0,23)
// console.log(Setdate.toDateString());

// we can also pass time in that 
// let Setdate =new Date(2024,0,23,5,30)
// console.log(Setdate.toLocaleString());

// time concept to get a particular milsecond time of that date usually used to check the exact time of the booking etc

// console.log(Setdate.getTime()/1000);//we get millisocond but we nwd to get the in secod so /1000



// to get particular info about the date

let date=new Date()

// console.log(date)
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getMinutes())

// to customize time we can use the following 

console.log(date.toLocaleString('default',{
    weekday:"long"
}))