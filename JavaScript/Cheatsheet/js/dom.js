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
const parents = document.getElementsByClassName("parent");
const parent1 = parents[0];
const parent2 = document.getElementsByClassName("parent")[1];

console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);

//By Selector completo

let element = document.querySelector("div#grandparent>.parent>div");//Solo el primer elemento
//Con .querySelectorAll selecciona todos
console.log(element);

parent1.style.backgroundColor = "#ddd";

element.style.backgroundColor = "#333";










// Array.from(family).forEach(item => console.log(item));//Crea un array para poder iterar 
//con todos los elementos
// for (let familyMember of family) {
//     console.log(familyMember);
// }