// let button = document.getElementById("btn");
// button.addEventListener("click", function(){
//     let word=document.getElementById("str").value;
//     console.log(word);
//     let count = word.length;
//     console.log(count);

// // displaying the count in a div
//     let outputdiv= document.getElementById("output");
//     outputdiv.innerHTML = `<h1>${count}</h1>`;
//     // outputdiv.innerHTML = count;
// });







// function changeText() {
//     document.getElementById("demo").innerHTML="New Text!";
// }

// function changeToOriginal() {
//     document.getElementById("demo").innerHTML="original text!";
// }




let select= document.querySelector("#selecttag");

select.addEventListener("change", function(e) {
    let selectedoption = select.value;
    let spantag= document.querySelector("#spantag");
    spantag.innerHTML = selectedoption;

    // document.querySelector("#spantag").innerHTML = selectedoption;
})




