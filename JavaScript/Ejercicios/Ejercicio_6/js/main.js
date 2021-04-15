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

const container = document.getElementById("container");

function postsArray(arrayTwo) {
    arrayTwo.slice(0, 20).forEach(element => {
        let elementTitle = document.createElement("h1");
        elementTitle.innerHTML = element.title;
        container.appendChild(elementTitle);
        let elementPost = document.createElement("p");
        elementPost.innerHTML = element.body;
        container.appendChild(elementPost);
    });
};

fetch(URL2)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con las respuesta: " + response.statusText);
            
        } 
        return response.json();
        
    }) 
    //Se ejecuta al final, metemos función en data para solucioniarlo
    .then(data => {
            console.log(data);
            postsArray(data);
    })
    .catch(error => console.log(error));