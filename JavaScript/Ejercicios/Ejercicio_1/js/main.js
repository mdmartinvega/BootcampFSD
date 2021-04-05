//Ejercicio 1
/*1. Partimos de un HTML con un div vacío. Con JS, añadir dos elementos p con 
un texto dentro*/
let paragraph1 = document.createElement("p");
let paragraph2 = document.createElement("p");

let container = document.querySelector(".miDiv");

container.appendChild(paragraph1);
paragraph1.textContent = "Este es el primer párrafo";
container.appendChild(paragraph2);
paragraph2.textContent ="Este es el segundo párrafo";

// Ejercicio 2
//2. Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.

const colorButtom = document.querySelector(".buttom-1");

colorButtom.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

//Ejercicio 3
/*3. Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un 
element img. Al hacer click en cada URL, cambiará la imagen a la que contenga 
dicha URL.*/

let listItems = document.querySelectorAll("li");

let picture = document.querySelector("img");
console.log(picture);

listItems[0].addEventListener("click", function(event) {
    picture.src = event.target.textContent;
});
listItems[1].addEventListener("click", function(event) {
    picture.src = event.target.textContent;
});
listItems[2].addEventListener("click", function(event) {
    picture.src = event.target.textContent;
});

/*4. Añadir un input de tipo texto y un botón. Al pulsar el botón debe 
escribirse el texto del input en un párrafo.
4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación 
de tecla del usuario.*/

const textInput = document.querySelector("#labelInput");
const paragraph4 = document.querySelector(".p-ej4");
const clickButtom = document.querySelector(".buttom-2");

clickButtom.addEventListener("click", function() {
    paragraph4.textContent = textInput.value;
});

const textInput2 = document.querySelector("#labelInput-2");

textInput2.addEventListener("keydown", function() {
    paragraph4.textContent = textInput2.value;
});

/*5. De forma similar al anterior, pero para un textarea y validará si lo 
introducido es mayor de 15 caracteres*/

/*6. Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir 
un botón. Al pulsar el botón nos validará si el número es par o no. En caso 
negativo, cambiar los bordes del input a rojo.Para revertir el estado de una 
propiedad, podemos utilizar el valor “revert” o dejarla vacío.*/

const textInput3 = document.querySelector("#labelInput-3");
const clickButtom3 = document.querySelector(".buttom-3");

clickButtom3.addEventListener("click", function (evento) {
    
})



























