// inheritance = acquiring the properties from parent class ans transferring to the child class is inheritance. 
// extends = inheritance implementation.
// parent class or baseclass or superclass are same 
// subclass or child class or derived class are same  

 


// super() it refers to call the parent class or superclass constructor   
// class car{}

// class bmw  extends car{}

// polymorphism => different type or many shapes.


// person => employee,friend,child,husband.child

// class car{
//     drive(){
//         console.log("driving car");
//     }
// }

// class bike extends car{
//     drive(){
//         console.log("driving motorbike");
//     }
// }


// same method is been called on different objects.


// let car1 = new car();
// car1.drive();

// let bike1 = new bike();
// bike1.drive();



// encapsulation

// the process of wrapping or binding the data into a single unit.


// getter = you can print or read the data.
// setter - you can set the data


// class car{
//     constructor(name,model,year){
//         this.name=name;
//         this.model=model;
//         this.year=year;
//     }

//     get carname(){
//         console.log(this.name);
//     }
// }

// let car1 = new car("bentley","flying spur","2023");
// car1.carname




// setTimeout()





function sample(){
    console.log("this is the print statement!");
}



// setTimeout(function,milliseconds)
// setTimeout(sample,5000);
// console.log("this is outside the function");
// The setTimeout() method is useful when you want to print a block of code only once.


// setinterval(function,milliseconds)

setInterval(sample,2500)

// The setInterval() method is useful when you want to repeat a block of code multiple times.



