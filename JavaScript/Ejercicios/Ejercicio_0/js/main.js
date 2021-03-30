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

const longFuncion = value =>
    value.length;
console.log(longFuncion("Holasss"));

console.log("**********Ejercicio_2************");
/*2) Programa una función que te devuelva el texto recortado 
según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

let recortFuncion = function (value2, num) {
    solution = value2.splice(num);
    return solution;
}
console.log("Hola Mundo", 4);

console.log("**********Ejercicio_3************");
/*3) Programa una función que dada una String te devuelva 
un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
let arraySeparado = value3 =>
    value3.split(" ");
console.log(arraySeparado("la la la"));

console.log("**********Ejercicio_4************");
/*4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
let arrayRepetido = (value4, num2) =>
    value4.repeat(value4, num2);
console.log("Hello", 3);
