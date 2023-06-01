// callback 

 

// synchronous ,  

// the execution of process or code line by line is called synchronous.


// asynchornous 

// the execution of multiple things at a time.

// if any process or code which is taking longer running which should not affect other process. 


// 3 tables


// 1 complete family dinner

// 2 coffee 5 minutes

// 3 tea 3 minutes 



// console.log("this is first statement");


// function second(){
//     console.log("this is second statement");
// }


// setTimeout(second,5000);

// console.log("this is third statement");



// callback is a way to achieve asynchronous programming in js. 


// callback is a function passed as a argument to another function. 



// const  compute = (n1,n2,cb) => cb(n1,n2);

// const add = (n1,n2) => n1+n2;
// const sub = (n1,n2) => n1-n2;

// console.log(compute(1,2,add));
// console.log(compute(1,2,sub));


// function greet(name){
//     console.log(`hi ${name} welcome`);
// };

// greet("ak")


// function displayfname(fname,lname,cb){
//     fullname = `${fname} ${lname}`;
//     cb(fullname);
//     // greet(sanjayej)
// }


// displayfname("s","j",greet);


function upper(name) {
    console.log(name.toUpperCase());
}



function handleName(name,cb) {
    console.log(name);
    cb(name);
}



// handleName("sanjaye",upper);

// callback hell => it is  nesting of multiple independent function on inside another.

let  time = 1000;

// raisedough
// doughrolled
// saucepoured
// addtoppings
// bakepizza
// deliverpizza

function raisedough(cb){
    console.log("waiting for dough");
    setTimeout(() => {
        console.log("dough is ready");
        cb();
    }, 3 * time);
}


function rolldough(cb){
    console.log("rolling dough");
    setTimeout(() => { 
        console.log("dough is rolled");
                cb();
            }, 3*time);
}


function sauce(cb) {
    console.log("preparing sauce");
    setTimeout(() => {
        console.log("sauce is ready");
        cb();
    }, 3*time);
}


function bake(cb){
    console.log("baking the pizza");
    setTimeout(() => {
        console.log("pizza is ready");
        cb();
    },3*time);
}


function delivery(){
    console.log("pizza is delivered");
}




raisedough(() => {
    rolldough(() => {
        sauce(() => {
            bake(() => {
                delivery(() => {
                    console.log("pizza is deliverd to the customer");
                })
            })
        })
    })
})