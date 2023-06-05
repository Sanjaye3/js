// promise is a way to achieve asynchronous operation in js 
import fetch from "node-fetch";
const { request } = require("http");

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


// let cleanroom = true;

// const promisetocleanroom = new Promise((one, two) =>{
//     if(cleanroom){
//         one("cleaned");
//     }
//     else{
//         two("not cleaned")
//     }
// })

// console.log(promisetocleanroom);


// promisetocleanroom.then((room) =>
// console.log(room)).catch((err) => console.log(err))


// promisetocleanroom.then(function (fromresolved) {
//     console.log("room is " + fromresolved);
// }).catch(function(fromrejected) {
//     console.log("room is " + fromrejected);
// })



// let promise = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         let data = 10;
//         resolve(data);
//     }, 1000);
// })

// promise.then((result) => {
//      result = result*2;
//     console.log(result);
// })
// .then((result) => {
//     result = result*4;
//     console.log(result);
// })
// .then((result) => {
//     result = result*8;
//     console.log(result);
// })
// .catch((error) =>{
//     console.log(error);
// })
// .finally(() =>{
//     console.log("this is finally");
// })

// promise.all 
// it is a method that takes list of elements and returns a promise
// resolve if all the promises are true.
// if any of the promise gets rejected then this also gets rejected. 

// Promise.all([promise1,promise2,promise3])





// const promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("this is the first promise to be resolved");
//         resolve(10);
//     },2000)
// })

// const promise2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("this is the  second promise to be resolved");
//         resolve(20);
//     },2000)
// })

// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("this is the third promise to be resolved");
//         resolve(30);
//     },2000)
// })

// const promise4 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("this is the fourth promise to be resolved");
//         resolve(40);
//     },2000)
// })

// const promise5 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("this is the first promise to be resolved");
//         resolve(50);
//     },2000)
// }) 

// Promise.all([promise1, promise2, promise3, promise4, promise5]) .then(results =>{
//     console.log("results: " + results)
//     let num = 250;
//     console.log(num);
// })



// async and await


// it is way to handle asynchronous operation in json

// they are built on top of promise.

// async => async keyword should be placed in front of the function keyword
// it returns a promise


// await => to access the value reutrned from async


// async function add(a,b){}


let promise1 = new Promise((resolve,reject) => {

        setTimeout(() => resolve("promise is resolved"),10000);
});


async function asyncfunc(){

       let result = await promise1;

       console.log(result);
       console.log("helloworld");
}


// asyncfunc()


let promise2 = new Promise((resolve,reject) => {

    // setTimeout(() => resolve("promise is resolved"),10000);

    resolve(40);
});

let promise3 = new Promise((resolve,reject) => {

    

    resolve(50);
});


async function asyncfunc1(){
    let result1 = await promise1;
    let result2 = await promise2;
    let result3 = await promise3;



    console.log(result1);
    console.log(result2);
    console.log(result3);
}


// asyncfunc1()



// fetch("url")
// it provides a global fetch method that is ready to get the data/information across the network in a asynchoronous way.
// it returns promise.
// .then()
// .catch()


// fetch is a newer standard for dealing with http request.
// get,put,delete,post,patch



// function display(){
//     fetch("https://reqres.in/api/users").then((res) =>res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }

function display(){
    fetch("https://reqres.in/api/users").then((res) =>console.log(res));
    
}


display()

