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

const appearPicture = event => picture.src = event.target.textContent;

listItems[0].addEventListener("click", appearPicture);
listItems[1].addEventListener("click", appearPicture);
listItems[2].addEventListener("click", appearPicture);

/*4. Añadir un input de tipo texto y un botón. Al pulsar el botón debe 
escribirse el texto del input en un párrafo.
4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación 
de tecla del usuario.*/

const textInput = document.querySelector("#labelInput");
const paragraph4 = document.querySelector(".p-ej4");
const clickButtom = document.querySelector(".buttom-2");

clickButtom.addEventListener("click", function() {
    paragraph4.textContent = textInput.value;
    textInput.value = "";
});

const textInput2 = document.querySelector("#labelInput-2");

textInput2.addEventListener("keydown", function() {
    paragraph4.textContent = textInput2.value;
});

/*5. De forma similar al anterior, pero para un textarea y validará si lo 
introducido es mayor de 15 caracteres*/

const textArea = document.querySelector("#textArea");
const paragraph5 = document.querySelector(".p-ej5");

textArea.addEventListener("input", (event) => {
    if (event.target.value.length > 15) {
        paragraph5.textContent = `Tu texto tiene más de 15 caracteres`;
        paragraph5.style.color = "green";
        paragraph5.style.fontSize = "1.5em";
    } else {
        paragraph5.textContent = "Tu texto tiene menos de 15 caracteres";
        paragraph5.style.color = "red";
        paragraph5.style.fontSize = "1.5em";
    }
    
});

/*6. Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir 
un botón. Al pulsar el botón nos validará si el número es par o no. En caso 
negativo, cambiar los bordes del input a rojo.Para revertir el estado de una 
propiedad, podemos utilizar el valor “revert” o dejarla vacío.*/

const textInput6 = document.querySelector("#labelInput-6");
const clickButtom6 = document.querySelector(".buttom-6");

clickButtom6.addEventListener("click", () => {
    if (textInput6.value % 2 === 0) {
        textInput6.style.borderColor = "green";
        
    } else {
        textInput6.style.borderColor = "red";
    }
})

/*7.Partiendo de una lista ul, crear 10 licon un texto indicando el número del elemento 
(“Elemento X”) usando un bucle for.*/

const ul = document.querySelector(".ul");

for (let i = 1; i <= 10; i++) {
    let element = document.createElement("li");
    element.textContent = `Elemento ${i}`
    ul.appendChild (element);
}

/*8.Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. 
Si pulso primero el botón y luego el enlace, se me abre en una nueva pestaña.*/

const button8 = document.querySelector(".buttom-8");
const link8 = document.querySelector(".a");

button8.addEventListener("click", function(e){
    link8 
})

/*9.Añadir un párrafo y un selectcon 5 opciones de colores: negro, blanco, rojo, amarillo, verde 
y azul. Al seleccionar un color del select, cambiar el color del párrafo.*/

/*10.Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista 
actualiza el número de elementos que se han generado, los que son pares y los que son impares.*/

/*11.Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. 
Al pulsar el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe,
lo añadirá al principio.*/


/*12.Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. Al hacer clicken el 
botón haremos “toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si 
no está, la añadiremos.*/























