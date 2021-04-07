function User(name, firstLastName, secondLastName, email, age, city, nProducts) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.nProducts = nProducts;
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

//Selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButtom = document.querySelector("#incrementButtom");
const emptyButtom = document.querySelector("#emptyButtom");

for (let user of users) {
    let option = document.createElement("option");
    option.textContent = user.name;
    select.appendChild(option);
}

