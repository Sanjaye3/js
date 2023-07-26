// console.log("Hello World");

// console.log(global);



// const os = require("os");
// console.log("free memory",os.freemem() /1024 /1024 /1024); 
// console.log("Total memory",os.totalmem()  /1024 /1024 /1024); 
// console.log("OS version",os.version());
// console.log("processor",os.cpus()); 



// const double = (num) => num * 2;
// const [, ,n] = process.argv;
// console.log(double(n));

// console.log(double(10));
// console.log(process.argv);


// files



const fs = require("fs");

const data = "\n old is gold" ;
// creating file
// fs.writeFile('writing.txt',data,(err) => {
//     console.log("wrote the text");
// })

// reading file
// fs.readFile("./writing.txt", "utf-8", (err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// appeding file
// fs.appendFile("writing.txt",data ,(err) =>{
//     console.log("have appended the text in the same file");
// })

const text ="creating text files";

// for (let i=1; i<=10; i++ ){
// fs.writeFile(`texts-${i}.txt`,data,(err) => {
//     console.log("created the text files");
// })
// }


// fs.unlink("texts-9.txt",(err) => {
//     console.log("deleted successfully!");
// })


fs.writeFile('/writing.txt',data,(err) => {
    console.log("wrote the text");
})
