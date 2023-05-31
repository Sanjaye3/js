let object =[


    {
        name:"india",
        population:1.3,
        region: "asia",

    },
    {
        name:"australia",
        population:1.4,
        region:"oceania",

    },
    {
        name:"china",
        population:1.4,
        region:"asia"
    },
    {
        name:"usa",
        population:302,
        region:"north america"
    }
]

console.log("working");

const container = document.createElement("div");
const row = document.createElement("div");


container.setAttribute("class","container-fluid");
row.setAttribute("class","row-fluid");



container.append(row);


object.forEach((item) =>{
    row.innerHTML += `
    <div>
    <h2>${item.name}</h2>
    <h3>${item.population}</h3>
    <h3>${item.region}</h3>
    </div>`

})


document.body.append(container);
