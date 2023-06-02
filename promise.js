// promise is a way to achieve asynchronous operation in js 

// state - 

// pending- it is initial state or not resolved or not rejected.

// fulfilled- if operation is executed successfully,then promise is resolved.


// rejected- if operation is failed, then promise is resolved.

// promise chaining 
// .then
// .catch


// creation of promise 

// const creation = new Promise(function(resolve, reject) {})



// const promise1 = new Promise(function(resolve, reject){
//     const data =["apple","mango"];
//     if(data.length > 0){
//         resolve(data)
//     }
//     else{
//         reject("this is a error")
//     }
// })

// console.log(promise1);


// promise1.then((result) => {
//     const store = result;
//     console.log(result);
//     console.log(`this is from promise ${store}`);
// })
// .catch((error) => {
//     console.log(error);
// })

// console.log("this is statement ");
// console.log(`this is statement ${store}`);


// task

// const num1 = 5;

// const num2 = Math.floor(Math.random()* 10);
// console.log(num2);
// const num2 = 5;


// const  promise2 = new Promise(function(resolve, reject) {
//     if(num1 == num2){
//         resolve("you have guessed it right!");
//     }
//     else{
//         reject("oops it is wrong");
//     }
// });

// promise2.then((message) =>{
//     console.log(message);
// }) 
// .catch((err) =>{
//     console.log(err);
// })


let cleanroom = true;

const promisetocleanroom = new Promise((one, two) =>{
    if(cleanroom){
        one("cleaned");
    }
    else{
        two("not cleaned")
    }
})

// console.log(promisetocleanroom);


// promisetocleanroom.then((room) =>
// console.log(room)).catch((err) => console.log(err))


promisetocleanroom.then(function (fromresolved) {
    console.log("room is " + fromresolved);
}).catch(function(fromrejected) {
    console.log("room is " + fromrejected);
})