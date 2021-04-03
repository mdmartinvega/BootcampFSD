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
    solution = value2.slice(0, num);
    return solution;
}
console.log(recortFuncion("Hola Mundo", 5));

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
    value4.repeat(num2);
console.log(arrayRepetido("Hello ", 3));

console.log("**********Ejercicio_5************");
/*5) Programa una función que invierta las palabras de una 
cadena de texto, pe. miFuncion("Hola Mundo") devolverá 
"odnuM aloH".*/

const stringRevers = value =>
    value.split("").reverse().join("");
console.log(stringRevers("Hola Mundo"));

console.log("**********Ejercicio_6************");
/*6) Programa una función para contar el número de veces que se repite una 
palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") 
devolverá 2.*/

console.log("**********Ejercicio_7************");
/*7) Programa una función que valide si una palabra o frase dada, es un 
palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") 
devolverá true.*/

console.log("**********Ejercicio_8************");
/*8) Programa una función que elimine cierto patrón de caracteres de un texto 
dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
devolverá  "1, 2, 3, 4 y 5.*/
console.log("**********Ejercicio_9************");
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

console.log("**********Ejercicio_10************");
/*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá 
true.*/

console.log("**********Ejercicio_11************");
/*11) Programa una función que calcule el factorial de un número (El factorial
de un entero positivo n, se define como el producto de todos los números 
enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

console.log("**********Ejercicio_12************");
/*12) Programa una función que determine si un número es primo (aquel que solo 
es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

console.log("**********Ejercicio_13************");
/*13) Programa una función que determine si un número es par o impar, pe. 
miFuncion(29) devolverá Impar.*/

console.log("**********Ejercicio_14************");
/*14) Programa una función para convertir grados Celsius a Fahrenheit y 
viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

/* 15) Programa una función para convertir números de base binaria a decimal y 
viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
