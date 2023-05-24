// spread operator 

const { object } = require("webidl-conversions");


// it is used to create shallow copy of an array

// they both extract array or object content as single element


// let numbers=[10,20,30,40,50];
// let copied=[2,3,4,5,...numbers];
// console.log(copied);


// let data =["a", "b", "c", "d", "e"];
// let newdata = [...data,"f", "g", "h", "i", "j", "k"];
// console.log(newdata);


const user1={name: "John", age: "16"};
const user2={name: "kohn", gender:"m"};
const user3={name: "midhin"}
const merge={...user1, ...user2,...user3};
// console.log(merge);



// rest parameter


// it should be the last argument or paramter inside a function.


function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
}

// sum(10,20,30,40,50);

function getcolor(color1,color2,...colors){
    console.log(`${color1}`);
    console.log(`${color2}`);
    console.log(`${colors}`); 
}


// getcolor("red","green","blue","black")





// before es5 we did not have any conepts of oops
// es6 =>

// class,object,constructor,methods,inheritance,polymorphism,encapsulation,abstraction.

// this concept is used to process your data with security,code reusablitiy and over riding.


// class => it is a blueprint to create an object.

// for every class there  must be one constructor.it should be created as soon as you create a object.

// method=>
// normal method or instance method

// let object = new classname();
// object.methodname

// static method
// classname.methodname
// static methodname()



// class person{
//     constructor(){
//         console.log("I am a constructor");
//     }
// }


// display(){
//     console.log("this is a instance method");
// }

// let obj = new person();
// obj.display();



class Car {
    constructor(model,name){
        this.model=model;
        this.name=name;

    }

    start(){
        console.log(`name of the car is ${this.name} and model is ${this.model}`); 
    }

    stop(){
        console.log("this is the stop method");
    }

}

// let object = new classname();
// bmw = new Car("x6","suv");
// object.methodname
// bmw.start();
// bmw.stop();

class childcar extends Car{
    cclass(){
        console.log("this is the child car class");
    }

    start(){
        super.start();
        super.stop();
        this.cclass();
    }

}
// let object = new classname();
let tree = new childcar("sedan","5 series");
// object.methodname
tree.start();





// Print odd numbers in an array
// Convert all the strings to upper caps in a string array
// Sum of all numbers in an array


