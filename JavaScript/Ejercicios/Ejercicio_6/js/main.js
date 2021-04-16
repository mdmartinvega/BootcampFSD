/*Hacer una petición a la API comments con el array que nos llegue iremos rellenando nuestra ul
con los primeros 20 elementos*/

/*En posts h1 para title y p para body*/


const URL = "https://jsonplaceholder.typicode.com/comments";

const list = document.getElementById("list");

function finalArray(array) {
    array.slice(0, 20).forEach(element => {
        // let listElement = document.createElement("li");
        // listElement.innerHTML = element.name;
        // list.appendChild(listElement);
        list.innerHTML += `<li>${element.name}</li>`;
    });
};

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
            finalArray(data);
    })
    .catch(error => console.log(error));

/*En posts h1 para title y p para body*/


const URL2 = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

const container = document.getElementById("container");

//variables

let posts = [];
let currentPage = 1;

//Hacemos forEach porque tenemos varios botones
document.querySelectorAll(".previousPage").forEach(button =>button.addEventListener("click", changePage));  
document.querySelectorAll(".nextPage").forEach(button =>button.addEventListener("click", changePage));

function postsArray() {
    const newPagePosts = paginating(posts, PAGE_SIZE, currentPage);
    container.innerHTML = "";//Para la paginación

    newPagePosts.forEach(element => {
        container.innerHTML += `<h3>${element.id}</h3>`;
        let elementTitle = document.createElement("h1");
        elementTitle.innerHTML = element.title;
        container.appendChild(elementTitle);
        let elementPost = document.createElement("p");
        elementPost.innerHTML = element.body;
        container.appendChild(elementPost);
    });
};

function changePage(event) {
    if(event.target.className === "previousPage" && currentPage > 1) {
        currentPage--;
    } else if (event.target.className === "nextPage" && posts.length / PAGE_SIZE){
        currentPage++;
    }
    postsArray();
}

function paginating(arrayTwo, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return arrayTwo.slice((page_number - 1) * page_size, page_number * page_size);
  };


fetch(URL2)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con las respuesta: " + response.statusText);
            
        } 
        return response.json();
        
    }) 
    .then(data => {
            console.log(data);
            posts = [...data];//Array vacío hasta que se llame al servidor
            postsArray();
    })
    .catch(error => console.log(error));

// -------- Ejercicio 6.2
// Constantes
const LOGIN_URL = 'https://reqres.in/api/login';
const USERS_URL = 'https://reqres.in/api/users';

 

// Selectores
const emailInput = document.querySelectorAll('input')[0];
const passwordInput = document.querySelectorAll('input')[1];
const usersList = document.querySelector("#usersList");
document.querySelector('#loginButton').addEventListener('click', login);

function login(event) {
    event.preventDefault();

 

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    
    const config = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(userInfo)
    }

 

    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => data.error ? alert(data.error) : fetchAllUsers()
    );                                             // Esto es segunda parte del apartado

 

    /*  fetch(LOGIN_URL, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
        })
    }) */
}

 
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

//Alternativa para recuperar todas las páginas de una API utilizando .then()
let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        users = users.concat(newData.data);

        if(newData.page < newData.total_pages) {
            fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`)
        } else {
            usersList.innerHTML = "";
            users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
        }
    })
    
}