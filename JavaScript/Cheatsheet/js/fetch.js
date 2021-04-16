//Petición de método GET

const URL = "https://jsonplaceholder.typicode.com/users";

// let promise = fetch(URL);

// let response = promise.then(response => {
//     console.log(response);
// }); //Cuando se cumpla la promesa then nos devolverá lo que introduzcamos
//en el argumento. En then metemos una función callback siempre.
//Para acortarlo 

function printNames(array) {
    array.forEach(element => {
        console.log(element.name)
    });
};

function printLat(array) {
    array.forEach(element => {
        console.log(element.address.geo.lat)
    });
};


fetch(URL).then(r => r.json()).then(data => console.log(data));


fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con las respuesta: " + response.statusText);
            
        } 
        return response.json();
        
    }) 
    //Se ejecuta al final, metemos función en data para solucioniarlo
    .then(data => {
            console.log(data);
            printNames(data);
            printLat(data);
    })
    .catch(error => console.log(error));
//Fin-fetch



// array.forEach((item) => console.log(item)); 

//Fetch devuelve una promesa, puede darte info en un futuro o puede fallar porque el servidor
//este caído, etc y no se cumpla la promesa

//Async / await - Alternativa a then

async function requestURL(URL) {
    console.log(1.1);
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    console.log(1.2);
}

console.log(1);
requestURL(URL);
console.log(2);

//Se imprime el 1, entra en la función e imprime el 1.1, se bloquea pero el 2 se imprime porque sigue 
//corriendo, después sigue la 1.2


//Petición de método POST

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi título",
    body: "mi cuerpo de publicación"
}

const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(POST_URL, http)
    .then(response => response.json())
    .then(data => console.log(data))


//Automáticamente recorrer las páginas de un API
async function fetchAllUsers() {
    /*     fetch(USERS_URL)
    .then(response => response.json())
    .then(data => console.log(data)) */

    let response = await fetch(USERS_URL);
    let data = await response.json();
    
    let users = [];

    for (let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data);
    }

    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`)
}