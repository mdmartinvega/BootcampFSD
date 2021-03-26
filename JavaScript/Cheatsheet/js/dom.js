console.log("Hola");

//DOM ---------------------

//Basics
console.log(document);
console.log(document.domain); //Antiphising si no cincide no es la real
console.log(document.URL);

document.title += " (DOM)"; //Añade título a lo que haya 
console.log(document.title);
console.log(document.lastModified);//Última fecha de modificación del HTML

//Selectors

//By Tag name
const family = document.getElementsByTagName("div");
console.log(family);

//By Id
const grandParent = document.getElementById("grandparent")
console.log(grandParent);

//By Class Name
//Guardamos selectores como clases
const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = document.getElementsByClassName("parent")[1];

console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);

//By Selector completo

let element = document.querySelector(".grantparent div");//Solo el primer elemento
//Con .querySelectorAll selecciona todos
console.log(element);



// let element = document.querySelectorAll("div#grandparent>.parent>div");//Solo el primer elemento
// //Con .querySelectorAll selecciona todos
// console.log(element);
// for (let item of element) {
//     item.style.backgroundColor = "#333";//Supuestamente debería colorear
//     //a todos en gris pero no funciona
// }

const changeBackground = (element, color) => 
    element.style.backgroundColor = color;

// changeBackground(children[0], "#333");
// changeBackground(parent1, "red");

// changeBackground(parent2.children[1], "blue");
//Seleciona al abuelo del hijo concreto
// changeBackground(children[0].parentNode.parentNode, "#ddd");

// changeBackground(parent1.children[1].previousElementSibling, "red");

//Acceder al DOM --- Solo estas
// Otros, children[], parentNode, previousElementSibling, 
//nextElementSibling, firstElementChild, lastElementChild 


//Properties

// grandParent.innerHTML = "";
// grandParent.innerHTML = "<h1>Hola futuro</h1>";

// children[0].innerHTML = "Child 1 V2";

console.log(children[0].innerHTML);
console.log(children[0].textContent);//Ignora etiqeutas HTML
//Se puede acceder al texto directamente
children[0].textContent += "version2";


console.log("Classlist: ", parent1.classList);
parent1.classList.remove("bg-dark");

console.log("Classlist: ", parent1.classList);
parent1.classList.add("bg-red");
console.log("Classlist: ", parent1.classList);

parent1.classList.toggle("bg-red"); //Si no tiene la clase, la añade
//Si tiene la clase, la quita

parent1.setAttribute("name", "nombre-del-parent-1"); //Si existe lo
//sobreescribe y si no te lo añade

//Create / Remove elements

let myDiv = document.createElement("div");
myDiv.id = "new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;

parent2.appendChild(myDiv2);
parent1.appendChild(myDiv); //Hasta este punto no lo añade

myDiv2 = myDiv.cloneNode(true);
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5";

let myDiv3 = myDiv.cloneNode();
parent2.before(myDiv3);

parent2.after(myDiv.cloneNode());

//Crear una función que me devuelva un nodo nuevo y que reciba etiqueta e ID

function createNode(label, id) {

    let newNode = document.createElement(label);
    newNode.id = id;
    return newNode;
}

let newDiv = createNode("div", "identificador-1");
let table = createNode("table", "identificador-2");

parent2.appendChild(newDiv);
parent2.appendChild(table);

//Events
const colorButton = document.getElementsByTagName("button")[0];
//Indicamos el index porque nos devuelve HTML Collection
//que se comporta como un array. Para seleccionarlo 
//específicamente indicamos index
colorButton.addEventListener("click", function(event) {
         console.log((event));
    // console.log(event.target);
    // document.body.classList.toggle("bg-red");
    // console.log(event.target.tagName);


    //Podemos controlar en qué momento ejecutar el evento
    //Aquó con la tecla ctrl pulsada
     if (event.ctrlKey) {
         document.body.classList.toggle("bg-red");
     }
     console.log(`X: ${event.clientX} | Y: ${event.clientY}`);
     console.log((`Alt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`));
});


const emailInput = document.querySelector("#emailInput");
//No indicamos el index en este caso porque no nos devuelve un HTML
//collection

emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener(event) {
    console.log(event.target);
    console.log("Tipo de evento ", event.type);

    if (event.type === "focus") {
        event.target.classList.add("bg-red");

    } else if (event.type === "blur") {
        event.target.classList.remove("bg-red");
    }
}

const changeTitle = event => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value;
    //Asigna el valor del input al h1
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);


function coords(event) {
    const h1 = document.querySelectorAll("h1")[3];
    h1.textContent = `X: ${event.clientX} | Y: ${event.clientY}`;

}

document.body.addEventListener("mousemove", coords);










// Array.from(family).forEach(item => console.log(item));//Crea un array para poder iterar 
//con todos los elementos
// for (let familyMember of family) {
//     console.log(familyMember);
// }