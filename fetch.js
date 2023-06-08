 console.log("this is fetch");


 let url = "https://63149b52fa82b738f74aae7b.mockapi.io/users";



//  get=> read 
// post => send the data to the server and add it 
// delete => to delete an exisitng data
// update => to update an exisitng data

// CRUD operation 

// get all users


function getData() {
    fetch(url,{
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        },
    })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}


// getData()

// post
// https://www.w3schools.com/js/js_json_stringify.asp

function postData(){
    let data ={
        name:"sanjaye",
        City:"chennai"
    }

    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-type': "application/json"}
    })
    .then((result) =>result.json())
    .then((data) =>console.log(data))
    .catch((error) =>console.log(error))
}

// postData()
// getData()



function deleteData() {
    fetch(url +"/25",{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
        },
    })
    .then((result) => (result.json()))
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}


// deleteData()
// getData()



function updateData() {
    let data ={
        name:"midhin",
        City:"coimbatore"
    };
    fetch(url +"/26",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        },
    })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    }
    
updateData()






