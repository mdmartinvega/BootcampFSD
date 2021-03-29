console.log("********Apdo 1*****************");
/*1. Define e inicializa un array con 5 
elementos string en una sola línea.*/

myArray = ["one", "two", "three", "four", "five"];
myArray.forEach((value, index) => {
    console.log(`El índice es ${index} y el valor es ${value}`); 
});

console.log("********Apdo 2*****************");
/*2. Define un array inicialmente vacío. 
Añade tres elementos de tipo number posteriormente. 
Elimina por completo el primero y añade dos nuevos números 
al inicio. En cada paso, imprime la longitud y el array
entero por consola utilizando un string template del tipo: `Longitud: ${}`.*/

myArray2 = [];
myArray2.push(1, 2, 3);
console.log(`Mi array es ${myArray2} y su longitud es de ${myArray2.length}`);

myArray2.shift();
console.log(`Mi array es ${myArray2} y su longitud es de ${myArray2.length}`);

myArray2.unshift(-3, -2);
console.log(`Mi array es ${myArray2} y su longitud es de ${myArray2.length}`);

console.log("********Apdo 3*****************");
/*3. Escribe una función nombrada que devuelva true si 
el argumento dado es de tipo boolean y false en
caso contrario. */

function namedFunction(value) {
    value === true || value === false ? console.log(true) : console.log(false);
};
namedFunction(5);

console.log("********Apdo 4*****************");
/*4. Escribe una función que devuelva la longitud de un 
string recibido por argumento.*/

let longFunction = value => 
    value.length;

console.log(longFunction("Holassss"));

console.log("********Apdo 5*****************");
/*5. Crea una función de flecha que reciba una cantidad 
de minutos y lo devuelva convertido en segundos.*/

const minutsFunction = value => sseconds = value * 60;
console.log(`Son ${minutsFunction(2)} segundos`);


console.log("********Apdo 6*****************");
/*6. Crea una función que reciba un número y devuelva el 
siguiente número par. (Si él es par, lo devolverá directamente).*/

const parNumber = function(value) {
    if (value % 2 === 0) {
        console.log(value);
    } else {
        console.log(value + 1);
    }
}
parNumber(8);

console.log("********Apdo 7*****************");
/*7. Crea una función que reciba una edad y devuelva la 
cantidad de días que esa persona ha vivido. Puedes
obviar los años bisiestos.*/

const ageFunction = value =>  value * 365;
console.log(`Has vivido ${ageFunction(38)} días`);

console.log("********Apdo 8*****************");
/*8. Crea una función que reciba un array y devuelva su 
último elemento. Prueba tu función con varios arrays
de diferentes longitudes.*/
