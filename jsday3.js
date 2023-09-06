let student = {
    firstname: "sanjaye",
    lastname:"j",
    fullname : () => {
        console.log(`${student.firstname} ${student.lastname}`);
    }
}

student.fullname();


// if and else


// if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }

let number =10;

if(number = 1){

   console.log("hi"); 
}
else {
    console.log("not one");
}



let requirement = true;


let cash = false;

if (requirement && cash){
    console.log("buy a car");
}
else{
    console.log("dont buy a car");
}

// 0 0 false
// 0 1 false 
// 1 0 false
// 1 1 true



let num = 10;
num = num +1 ;



num += 1 ;

// post increment operator
num++;

// pre increment operator
++num;
console.log(num);



// ternary operator condition?hi :bye

// let age = 45;
// age > 55 ? console.log("age is greater") : console.log("age is lesser") ;


let age = 20;


// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

if(age < 18 ){
    console.log("cant vote");

}

else if(age >= 18){
    //  block of code to be executed if the condition1 is false and condition2 is true
    console.log("eligible to vote");
}

else{
    console.log("invalid input");
}

