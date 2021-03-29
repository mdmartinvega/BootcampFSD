let numCamisetas = 5.5;
let numPantalones = "4";
let totalProductos = numCamisetas + Number(numPantalones);
console.log(totalProductos);
console.log(window);

const a = "Hola";
const b = [2, ["one", "two"], true];
console.log(a.length);
console.log(b);

console.log("**********Ejercicio_1************");
/*1) Programa una función que cuente 
el número de caracteres de una cadena de texto, pe. miFuncion
("Hola Mundo") devolverá 10.*/

let longFuncion = "Hola Mundillo";
console.log(longFuncion.length);

console.log("**********Ejercicio_2************");
/*2) Programa una función que te devuelva el texto recortado 
según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

let recortFuncion = "Hola mundillo";
console.log(recortFuncion.slice(0, 5));

console.log("**********Ejercicio_3************");
/*3) Programa una función que dada una String te devuelva 
un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
let arraySeparado = ("Hola como te ha ido el día");
console.log(arraySeparado.split(" "));


console.log("**********Ejercicio_4************");
/*4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
let arrayRepetido = ("Adiós mundo");
console.log(arrayRepetido.repeat(5));

