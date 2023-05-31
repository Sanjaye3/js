// dom - document object model 

const { element } = require("prop-types")

// when we have to use js to create html elements and div

// js dom selectors

// getElementById("")
// getElementByClassName()
// getElementByTagName()


// innertext()
// innerHTML()


// querySelector()
// querySelectorAll()



// dom represents the whole document like a family tree 
// using dom we can create dynamic html elements
// using dom we can create,add,delete,remove,modify html elements


{/* <p className="demo">hello</p> */}

// attribute => classname,idname
// element => HTMLElement
// Textnode => content


// in a dom we have to start everything within a document
// where we can render or select the entire page  


// getElementById("") => return the value to the selected element containing attribute as id.

{/* <p id="demo">hello</p> */}

// let htmlSelected = document.getElementById("demo");
// let viewing=htmlSelected.innerText;

// htmlSelected.style.property = value;
// htmlSelected.style.color = 'black';


// https://www.geeksforgeeks.org/difference-between-innertext-and-innerhtml/



// getElementByClassName("") => this is used to select all the elements which are having a specific class name.
// return the values as a array of elements as data


// getElementByTagName()=> one can select the elements which have the tag name.

let selected = document.getElementsByTagName("li");
selected[0].innerHTML;


let length = selected.length;



const container = document.createElement("div");
const row = document.createElement("div");


container.setAttribute(name,value);
container.setAttribute("class","container-fluid")



// https://developer.mozilla.org/en-US/docs/Web/API/Element/append


// https://www.w3schools.com/jsref/met_node_appendchild.asp

