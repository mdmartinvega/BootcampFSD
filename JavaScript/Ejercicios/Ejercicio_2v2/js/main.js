/*1. Crear el constructor del usuario con sus propiedades y métodos.*/

function User (name, firstLastName, secondLastName, email, age, city, nProducts) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.nProducts = 0;
    this.incrementProducts = function() { 
        this.nProducts++; 
    };
    this.emptyProducts = function() {
        this.nProducts = 0;
    };
};

/*2. Rellenar el array con varios usuarios.*/

const users = [
    new User("Fran", "Gómez", "Fernández", "f@gmail.com", 23, "Barcelona"),
    new User("Laura", "Martín", "Vega", "l@gmail.com", 30, "Madrid"),
    new User("María", "Rodríguez", "López", "m@gmail.com", 53, "Málaga"),
];

// 3. Creamos el HTML y CSS necesarios y accedemos desde JS a los elementos necesarios del DOM y 
// guardamos las referencias.

const select = document.querySelector(".custom-select");
const list = document.querySelector(".unorderedList");
const buttonIncrement = document.querySelector(".increment");
const buttonEmpty = document.querySelector(".empty");

/*4. Rellenamos el selector con el nombre de cada usuario.*/

for (const user of users) {
    let option = document.createElement("option");
    option.textContent = user.name;
    select.appendChild(option);
};

//5. Rellenamos la lista con todas las propiedades de un usuario cualquiera.

let newList = document.querySelector("li");
newList.textContent = user;
list.appendChild(newList);

