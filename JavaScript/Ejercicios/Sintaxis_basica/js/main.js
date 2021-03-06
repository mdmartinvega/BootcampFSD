console.log("********Apdo 1*****************");
/*1. Define e inicializa un array con 5 
elementos string en una sola línea.*/

const myArray = ["one", "two", "three", "four", "five"];
console.log(myArray);



console.log("********Apdo 2*****************");
/*2. Define un array inicialmente vacío. 
Añade tres elementos de tipo number posteriormente. 
Elimina por completo el primero y añade dos nuevos números 
al inicio. En cada paso, imprime la longitud y el array
entero por consola utilizando un string template del tipo: `Longitud: ${}`.*/

const myArrayTwo = [];
console.log(`Longitud: ${myArrayTwo.length}`, myArrayTwo);

myArrayTwo.push (1, 2, 3);
console.log(`Longitud: ${myArrayTwo.length}`, myArrayTwo);

myArrayTwo.splice(0, 1, -2, -3)
console.log(`Longitud: ${myArrayTwo.length}, ${myArrayTwo}`);



console.log("********Apdo 3*****************");
/*3. Escribe una función nombrada que devuelva true si 
el argumento dado es de tipo boolean y false en
caso contrario. */

function booleanCheck(argument) {
    return typeof argument === "boolean" ? true : false;  
}

console.log(booleanCheck(true));
console.log(booleanCheck("true"));
console.log(booleanCheck(null));
console.log(booleanCheck(undefined));
console.log(booleanCheck(false));
console.log(booleanCheck(3));



function booleanCheck2 (argumento) {
    return typeof argumento === "boolean";
};

console.log(booleanCheck2(true));
console.log(booleanCheck2("true"));
console.log(booleanCheck2(3));


console.log("********Apdo 4*****************");
/*4. Escribe una función que devuelva la longitud de un 
string recibido por argumento.*/

function returnLength(string) {
    return string.length;
};

console.log(returnLength("holis"));

//Arrow function
const longFunction = value => value.length;

console.log(longFunction("Holassss"));


console.log("********Apdo 5*****************");
/*5. Crea una función de flecha que reciba una cantidad 
de minutos y lo devuelva convertido en segundos.*/

const fromMinutesToSeconds = minutes => minutes * 60;
console.log(`Son ${fromMinutesToSeconds(1)} segundos`);



console.log("********Apdo 6*****************");
/*6. Crea una función que reciba un número y devuelva el 
siguiente número par. (Si él es par, lo devolverá directamente).*/

const evenNumber = number => number % 2 === 0 ? number : number + 1;
console.log(evenNumber(2));
console.log(evenNumber(3));
console.log(evenNumber(0));



console.log("********Apdo 7*****************");
/*7. Crea una función que reciba una edad y devuelva la 
cantidad de días que esa persona ha vivido. Puedes
obviar los años bisiestos.*/

const agePerson = age => age * 365;
console.log(agePerson(1));
console.log(`Has vivido ${agePerson(38)} días`);



console.log("********Apdo 8*****************");
/*8. Crea una función que reciba un array y devuelva su 
último elemento. Prueba tu función con varios arrays
de diferentes longitudes.*/

const lastElement = array => array[array.length-1];
console.log(lastElement([1, 2, 3]));



console.log("********Apdo 9*****************");
/* 9. Un granjero necesita contar la cantidad de patas de los animales en susdiferentes granjas muy
frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y 
cerdos (4 patas). Tu función recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales.*/

const countLegs = function(value1, value2, value3) {
    let pollos = value1 * 2;
    let vacas = value2 * 4;
    let cerdos = value3 * 4;
    return pollos + vacas + cerdos;
}
console.log(`El número de animales en la granja es de ${countLegs(2, 2, 2)}`);

console.log("********Apdo 10*****************");
/*10. Crea una función que determine si dos datos recibidos por argumentos 
son del mismo tipo.*/

const checkDatas = (data1, data2) => typeof data1 === typeof data2 ? "Mismo tipo" : "Diferente tipo";

console.log(checkDatas(2, 3));
console.log(checkDatas(null, undefined));
console.log(checkDatas("holis", 3));
console.log(checkDatas(true, false));
console.log(checkDatas(NaN, 0));



console.log("********Apdo 11*****************");
/*11. Crea una función que reciba un string con una frase y devuelva un array 
donde cada elemento será una palabra de la frase original. Investigar método 
existente de los strings para este fin.*/

const returnWords = string => string.split(" ");
console.log(returnWords("Bienvenido a CodeSpace"));


console.log("********Apdo 12*****************");
/*12. Inicializa dos objetos, address1 y address2 con las 
propiedades: provincia, ciudad, municipio, código
postal, calle, número, planta, y número de puerta.*/

const address1 = {
    provincia: "Madrid",
    ciudad: "Madrid",
    municipio: "Alcobendas",
    codigo_postal: 28721,
    calle: "Velazquez",
    numero: 3,
    planta: 6,
    num_puerta: "A"
}
console.log(address1);

const address2 = {
    provincia: "Barcelona",
    ciudad: "Barcelona",
    municipio: "Sitges",
    codigo_postal: 08721,
    calle: "Eras",
    numero: 1,
    planta: 9,
    num_puerta: "B"
}
console.log(address2);

console.log("********Apdo 13*****************");
/*13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) 
y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. Crea 
una función que se llame parseDomain() que reciba por argumento un string y 
devuelva un objeto con dos propiedades: domain y tld.*/

const parseDomain = function(value) {
    let domainTld = value.split(".");
    return {domain: domainTld[0], tld: domainTld[1]};
}
console.log(parseDomain("codespaceacademy.com"));


console.log("********Apdo 14*****************");
/*14. Nos han prohibido el uso del operador de igualdad estricta (===), pero 
queremos poder seguir utilizando dicha esa funcionalidad. Crea una función que
devuelva true si dos números tienen el mismo valor y el mismo tipo de dato.
Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:*/

let strictEquality = (value3, value4) => value3 == value4 && typeof value3 == typeof value4;
console.log(strictEquality("5",5));
console.log(strictEquality(5,5));

console.log("********Apdo 15*****************");
/*15. Crea una función que reciba dos strings y devuelva true si tienen la 
misma longitud y false en caso contrario.*/

const sameString = (value1, value2) => value1.length === value2.length;
console.log(sameString("hola", "hhola"));
console.log(sameString("hola", "casa"));

console.log("********Apdo 16*****************");
/*16. Crea una función que reciba un string y determine si está vacío sin 
utilizar la propiedad length.*/

const emptyString = function (string) {
    return string === "";
}
console.log(emptyString(""));
console.log(emptyString("fghj"));

const hasStringContent = string => string ? 'El string tiene contenido' : 'El string está vacío';

console.log("********Apdo 17*****************");
/*17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas 
diferentes: */
//• while

let i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}
//• for
for (let i=0;i < myArray.length; i++) {
    console.log(`El índice es ${i} y el valor es ${myArray[i]}`);
}

//• for of

for (let count of myArray) {
    console.log(count);
}

//• forEach.*/
myArray.forEach((value, index) => {
    console.log(`El índice es ${index} y el valor es ${value}`); 
});

console.log("********Apdo 18*****************");
/*18. Crea una función que reciba un string y un número N y devuelva el 
string original repetido N veces*/

const repeatString = (value, nVeces) => 
    value.repeat(nVeces);
console.log(repeatString("No haré memes sobre el profesor. ", 5));

console.log("********Apdo 19*****************");
/*19. Crea una función que recibe un objeto con dos campos, votos positivos y 
votos negativos y que devuelva la cuenta final.*/

const getVoteCounts = function(obj) {
    return obj.upVotes - obj.downVotes;
}
console.log(getVoteCounts({upVotes: 35, downVotes: 18}));

console.log("********Apdo 20*****************");
/*20. Crea una función que recibe un array de tipos de datos mezclados y que 
devuelva otro array con el tipo de cada uno de los elementos.*/

const getTypes = theArray =>
    theArray.map(typeElement = element => typeof element);

console.log(getTypes([1, "hey", undefined, {}, [], 0, null, NaN]));

console.log("********Apdo 21*****************");
/*21. Función que dado un array de números con formato string devuelva un 
array con los números ya parseados.*/

const getParsedNumbers = theArrayString =>
    theArrayString.map(parse = element => Number(element));
console.log(getParsedNumbers(["2", "3", "0.5"]));

console.log("********Apdo 22*****************");
/*22. Crea una función de flecha que devuelva “Positivo” si el número que 
recibe por argumento es mayor o igual que cero y “Negativo” en caso contrario. 
Usa el operador ternario.*/

const positiveNumber = value => value >= 0 ? "El número es positivo" : "El número es negativo";
console.log(positiveNumber(-1));
console.log(positiveNumber(0));
console.log(positiveNumber(1));

console.log("********Apdo 23*****************");
/*23. Crea una función que dado un array cualquiera y un índice, borre el 
elemento guardado en ese índice.*/

const removeItem = function(value, index) {
    return value.splice(index, 1);
};
console.log(removeItem([1, 2, 3], 0));

console.log("********Apdo 24*****************");
/*24. Usando la función del apartado anterior, crea otra función que dado un 
array de números y un número a filtrar, devuelva un array borrando todos las 
apariciones de dicho número. HACER CONTADOR AL REVÉS*/

const filterItem = (array, numberToFilter) => {
    array.forEach((element, index) => {
        if (element === numberToFilter) {
            removeItem(array, index);
        }
    });
}

const arrayFiltered = [1, 5, ,5, 3, 5, 5, 7];
filterItem(arrayFiltered, 5);
console.log(arrayFiltered);

console.log("********Apdo 25*****************");
/*25. Crea dos funciones que recibirán un objeto, la primera devolverá un 
array con los nombres de todas sus propiedades. La segunda devolverá un array 
con los valores de dichas propiedades.
Investigar los métodos keys y values del prototipo de Object.*/

let pruebaApt25 = {key1: 'value1', key2: ['value2', 'valueOther'], key3: 'value3'};
const propertyNames = (object) =>  Object.keys(object);
console.log(propertyNames(pruebaApt25));

const propertyValues = (object) => Object.values(object);  
console.log(propertyValues(pruebaApt25));


console.log("********Apdo 26*****************");
/*26. Crea una función que invierta un string.*/
let stringReverse = string =>
    string.split("").reverse().join("");
console.log(stringReverse(".nóicamargorp ed sedrat sal ne éfac led érasuba oN"));

const stringReverseLuis = string => {
    let reversed = '';
    for (let char of string) {
        reversed = char.concat(reversed);
    }
    return reversed;
};

console.log("********Apdo 27*****************");
/*27. Crea una función que compare strings sin tener en cuenta las mayúsculas 
/ minúsculas.*/

const compareStrings = (string1, string2) =>
    string1.toLowerCase() === string2.toLowerCase();

console.log(compareStrings("HELO", "hello"));
console.log(compareStrings("HELLO", "hello"));

console.log("********Apdo 28*****************");
/*28. Crea una función que convierta en mayúscula sólo la primera letra de cada palabra 
de un string dado. El apartado 11 será de ayuda. Investigar cómo unir un array 
de strings en un único string.*/

const firstCapitalize = value =>
    value.split(" ").map(firstLetter =>firstLetter[0].toUpperCase() + firstLetter.slice(1).toLowerCase()).join(" ");
console.log(firstCapitalize('Esto ES oTRa prueBa pARA COMPROBAR sI FuncIona CorrecTAMENTe mi FUNCIÓn :)'));

console.log("********Apdo 29*****************");
/*29. Crea una función en una única línea que reciba un valor lógico y 
devuelva el opuesto.*/

const oppositeBoolean = boolean => !boolean;
console.log(oppositeBoolean(true));
console.log(oppositeBoolean(1 === 1));
console.log(oppositeBoolean(""));
console.log(oppositeBoolean(0));
console.log(oppositeBoolean(!0));
