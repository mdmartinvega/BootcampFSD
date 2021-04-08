
//1.Crear elconstructordel usuario con sus propiedades y métodos.
function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.nProducts = 0;
    this.incrementProducts = function () {
        this.nProducts++;
    }
    this.emptyProducts = function () {
        this.nProducts = 0;
    }
}
//Data
const users = [
    new User("Fran", "Gómez", "Fernández", "f@gmail.com", 23, "Barcelona"),
    new User("Laura", "Martín", "Vega", "l@gmail.com", 30, "Madrid"),
    new User("María", "Rodríguez", "López", "m@gmail.com", 53, "Málaga"),
];

//4.Rellenamos el selector con el nombre de cada usuario.
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButtom = document.querySelector("#incrementButtom");
const emptyButtom = document.querySelector("#emptyButtom");


for (let user of users) {
    let option = document.createElement("option");
    option.textContent = user.name;
    select.appendChild(option);
}

// users.forEach(user => {
//     const option = document.createElement("option");
//     option.textContent = user.name;
//     select.appendChild(option);
// });

//5.Rellenamos la lista con todas las propiedades de un usuario cualquiera.

function fillList(user) {

    list.innerHTML = "";

    for (const propertyName in user) {//Aceder a las propiedades de un objeto
        const value = user[propertyName];
        if (typeof value !== "function"){
            //console.log(`key: ${propertyName}, value: ${value}`);
            const newListItem = document.createElement("li");
            newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`
            newListItem.classList.add("list-group-item");
            list.appendChild(newListItem);
    
            //list.innerHTML += `<li class= "list-group-item"><b>${propertyName}:</b> ${value}</li>`
        }
    }
    
}

//Estado inicial

fillList(users[0]);

//Función para incrementar o vaciar carrito que llamaremos después
function processProducts(e) {
    const selectedUser = users.find(user => user.name === select.value);
    if (e.target === incrementButtom) {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    }
    fillList(selectedUser);
}


//6.Añadir listeners necesarios

select.addEventListener("change", e => {
    const selectedUser = users.find(user => user.name === select.value);//Devuelve true y por tanto el elemento
    fillList(selectedUser);
});


incrementButtom.addEventListener("click", processProducts);
emptyButtom.addEventListener("click", processProducts);

    





