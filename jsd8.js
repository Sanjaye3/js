// mrf method/higher order functions 


// Map,reduce,filter 


// let data = [
//     {id: 1, name: 'a',age:10},
// {id: 2, name: 'b',age:20},
// {id: 3, name: 'c',age:30},
// {id: 4, name: 'd',age:40},
// {id: 5,name: 'e',age:50}
// ];



// let array = [];

// data.forEach(function(data) {
//     array.push(data.name);
// });

// console.log(array);


// let array = data.map(function(data) {
//     return data.name;
// });
// console.log(array);


// reduce

// const arr = [1,2,3,4,4];
// const sum = arr.reduce(function(acc,current){
//     return acc+current;
// },10)
// console.log(sum);


// let totalage = data.reduce(function(acc,current){
//     let sum = acc+current.age;
//     console.log(sum);
// });
// console.log(totalage);

 
// filter

let data = [
    {id: 1, name: 'a',age:10},
{id: 2, name: 'b',age:20},
{id: 3, name: 'c',age:30},
{id: 4, name: 'd',age:40},
{id: 5,name: 'e',age:50},
{id: 6, name: 'f',age:undefined},
{id: 7, name: undefined,age:70}
];


let result = data.filter((item) => {
    if(item.name !== undefined && item.age !== undefined){
        return true;  
    }
    else{
        return false;
    }
});

console.log(result);




const numbers = [5,7,8,9,10,11,12,13,14,15];
const filter = numbers.filter(number =>{ 
return number>5 });
// console.log(filter);


const employees = [
    {name: 'rohan',
    year: 2000,
    rank:1},
    {name: 'rohit',
    year:2004,
    rank:2},
    {name: 'rohesh',
    year:2002,
    rank:2},
]


let chaining = employees.filter((employee) => employee.year === 2002 || employee.rank === 2).map((employee) => employee.name) ;
// console.log(chaining);
