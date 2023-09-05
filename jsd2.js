// function sum(){
    
//     console.log("today is 04/09");
// }

 


let array = [1,2,3,4,5];

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);






// console.log(typeof(array));


// implicit type conversion
let num1 = "5";
let num2 = "9";

let  sum = num1 + num2 ;

// console.log(sum);
// 14


let number= 10;
// console.log(typeof(number));
let numberr="10";
// console.log(typeof(numberr));


 

// let object = {
//     name:"sanjaye",
//     designation:"sd",
//     gender:"male"
// }


// json => javascript object notation

// it gives you data from server,it is represented as json



let object =
        {
        name:"sanjaye",
        designation:"sd",
        gender:"male"
    }
 



    let example =["chennai","bangalore","coimbatore"];


for(let city of example){
    console.log(city);
}

for (let city in example){
    console.log(city)
}


// for in => iteration over the keys(index)

// for of => data itself.




function name(){
    console.log("this is a fucntion");
}


name()


// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

function summ(a,b,c){
    console.log(a+b+c);
}

summ(25,25,25)

summ(1,3,2)



function getfood(name){
    console.log("food is for" + " " + name);
}

getfood("sanjauye")

getfood("agilan")



// anonymous functions = > these are the functions which do not have name.

// an anonymous functions is not accesible after its initial creation,it can be only accessed by a variable


let anon = function (){
    console.log("this is a anonymous function");
}

 anon()

 let example2 = function (name){
    console.log("food is for" + " " + name);
}

example2("agilan")


// iife functions => immediately invoked function expression
    // where we called it immediately,calls only 1 time

// (function (){
//     console.log("this is a IIFE function");
// }) ();  



// regular function
function iife (){
    console.log("this is a IIFE function");
}

iife();


// arrow function (es6)

// arrow functions allows us to write shorter function syntax


// optimized version to normal function


let summm = (num1,num2) => {
    console.log(num1+num2);
} 

summm(1,2)


// Sum of all numbers
// convert te string to uppercase


