console.log('Hola');

//----------------- Uso de JS externo --------------------

function saludo () {
    alert("Hola desde un script externo");
    console.log('Has hecho click');
}
//document.getElementsByTagName('a').item(2).addEventListener('click',saludo);

// -----------------Depuración / logging-----------------

// alert("Mensaje");
console.log('Mensaje');

// ---------------------Variables---------------------------------

// var -> function scope
// var / const -> block scope

function saludar() {
    // console.log("Inicial: ", contador);

    // Si usamos var no nos dará error por el scope entero
    for (let contador = 0; contador < 3; contador++ ) {
        console.log(contador);
    } 
    // console.log("Final: ", contador);
}

saludar();

console.clear(); //Limpiar pantalla

//Inicialización -------------------------------

let day;
day = 5;

let weekDay = 'Martes';

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; //Avanzada
console.log(var1, var2, var3);

// const -> block scope
const x = 1;
// const y; Error: missing = in const
// x = 2; Error

console.clear();

// -----------------Tipos de datos // Primitivos---------------------

let str = String("I'm a string");
let str2 = "I'm another string";
let str3 = "";
console.log(typeof str, typeof str2, typeof str3);

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef); //No sabemos ni el tipo ni el valor por tanto es undefined

let selectedColor = null; //Limpiar una variable, comprobar si una variable está incializada o no
console.log(selectedColor, typeof selectedColor);

if (selectedColor){
    //tiene algun valor
} else {
    //No tiene ningún valor
}

console.clear();

// -----------------Tipos de datos // Objetos---------------------

array = Array(1, 2, 3); //Ya está definida en el ejemplo de arriba por tanto solo asignamos un nuevo valor
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("1983/14/02"));
console.log(typeof new Error("Mensaje de error"));


//-------------- Strings ---------------------

str = "Hola futuro";
console.log(str, typeof str, str.length); //Tamaño string
console.log(str.indexOf("Futuro"), str.indexOf("Esto no existe"));

if(str.indexOf("futasduro") == -1) {
    //No existe
}

console.log("La última ocurrencia de 'u' está en el índice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola mundo. ".concat("Adiós mundo"));
console.log("Hola mundo." + " Adiós mundo");

str = str + ". Adiós Mundo";
str += ". Adiós Mundo";
console.log(str);

console.log(str.replace("Mundo", "futuro" ));
console.log(str.replaceAll("Mundo", "futuro" ));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El día de mi cumpleaños es el ${day}.`);//String template ES6
console.log(`El día de mi cumpleaños es el`, day);

//Parsing----- Cambiar tipo a un dato

let number = Number("jksdhbkjs"); //NaN not a number
console.log(number, typeof number); 

number = Number("1000");
console.log(number, typeof number); 

number += "1000"; //Concatena el primer número con el segundo string
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);
//La parte izquierda concatena los dos números
//La parte derecha convierte "1" a number y le resta -1

console.clear();

//--------------Objetos---------------------

let person = {
    name: "John",
    age: 30,
    blonde: false,
    walk: function() {
        console.log("Hey, estoy andando");
    },// Pre ES6
    jump() { //Función
        console.log("Hey, estoy saltando");
    }, //ES6
    presentarse() {
        console.log(`Me llamo ${this.name} tengo ${this.age} años y ${this.blonde ? 'soy rubio' : 'soy moreno'}` );
    }
}


//Acceso por punto / Dor notation
console.log(typeof person, person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

//Acceso por corchetes / Brackets notation

let nombreDeLaPropiedadQueQuiero = "age";
console.log(person[nombreDeLaPropiedadQueQuiero]); 

//Ampliación


//     person = {
//     name: "John",
//     age: 30,
//     blonde: false,
//    children:[]
//  } No hacer así

person.children = ["Martha", "Peter"];
console.log(person);
console.log(person.children[0]);

console.log(`Se llama ${person.name}, tiene ${person.age} años y tiene 2 hijos que se llaman ${person.children[0]} y ${person.children[1]} .`);

person.jump();
person.walk();

console.log(typeof {}, typeof[]);


// This

const person2 = {
    name: "Thomas",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

const person3 = {
    name: "Sarah",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

person2.talk();
person3.talk();

console.clear();

// Arrays ----------------------------------

let selectedColors = ["red", "blue"]; //Array de strings
console.log(selectedColors, selectedColors.length, typeof selectedColors);

//Añadir elementos a un array al final
selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);

//Añadir elementos a un array al final
selectedColors.push("violet", "white");
console.log(selectedColors, selectedColors.length);

//Elimina el último elemento del array
selectedColors.pop();
console.log(selectedColors, selectedColors.length);

//Añadir un elemento al principio del array
selectedColors.unshift("black");
console.log(selectedColors, selectedColors.length);

//Eliminar un elemento al principi
selectedColors.shift();
console.log(selectedColors, selectedColors.length);

//Ordenar alfabéticamente
selectedColors.sort();
console.log(selectedColors, selectedColors.length);

//Buscar un elemento 
console.log("El rojo está en el índice", selectedColors.indexOf("red"));

//Devuelve los valores que le indiquemos, sin tocarlos  
console.log((selectedColors.slice(1, 3)));

//Borra los elementos comenzando en el elemento 1 y borrando cuántos indiquemos
console.log((selectedColors.splice(2, 3)));
console.log("El array se ha quedado así: ", selectedColors);

/*Crear un objeto niño que tenga las propiedades nombre, 
altura, género y amigos. Amigos estará inicialmente vacío 
y los añadiremos posteriormente con 3 elementos. Despuués 
añadiremos uno extra al principio. Añadimos funcion perder amigo*/

let child = {
    name: "Oliver",
    height: 1.2,
    genre: "male",
    friends: [],
    loseFriend() {
        this.friends.pop() //Seleccionamos atributo del objeto donde estamos
    }
}

console.log(child);

//Añadimos los amigos. Usamos push si hay alguno preexistente
child.friends =["Mary", "Jonh", "Peter"];
console.log(child);

//Añadimos un amigo más al principio
child.friends.unshift("Bianca");
console.log(child);

//Perdemos amigo
child.loseFriend();
console.log(child);

console.clear();
// ----------------Condicionales ---------------------------
const randomNumber = 9;
const guessedNumber = "5"

if (typeof randomNumber !== typeof guessedNumber) {
    console.log("Hey, tienes que introducir el mismo tipo");
}

if (randomNumber == guessedNumber && randomNumber !== guessedNumber) {
    console.log("Hey, tienes que introducir el mismo tipo");
}

if (randomNumber === guessedNumber) {
    console.log("Has acertado el número!");
} else if (randomNumber > guessedNumber) {
    console.log("El número secreto es mayor");
} else {
    console.log("El número secreto es menor");
}

//Ternary operator ------------------
let variable = 12 < 10 ? "El primero es menor" : "El primero es mayor";
console.log(variable);

person.presentarse();

// Switch case

let option = 4;
switch (option) {
    case 1:
        console.log("Option vale 1");
        break;
    case 2:
        console.log("Option vale 2");
        break;
    case 3:
        console.log("Option vale 3");
        break;
    default:
        console.log("Option no vale nada");
        break;
}

console.clear();
//----------------- Funciones --------------------------

//Nombradas

function greet(name, lastName) {
    console.log(`Hola, ${name} ${lastName}. Qué tal?`);
}

greet();
greet("Marcos", "Aurelio");


function greet(name, lastName) {
    return `Hola, ${name} ${lastName}. Qué tal?`;
}

console.log();(greet("Marcos", "Aurelio"));


//Que devuelva el cuadrado de un número

function square(num) {
    let square = num * num;
    return `El cuadrado de ${num} es ${square}`; //Rompe y para la función. 
    return "";
}
console.log(square(3));
console.log(square(12));
console.log(square(option)); //variable de arriba

//Anónimas
let numbersArray = [5, 51, 1, 15, 2];
console.log(numbersArray);
numbersArray.sort(); //Ordenado con ASCII
console.log(numbersArray);

//Ascendente
function orderNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

numbersArray.sort(orderNumbers);
console.log(numbersArray);

//Descendente
numbersArray.sort(function (a, b) {return b - a});

console.log(numbersArray);

//Funciones de flecha

let perimeterOfSquare = function (side) { //Función anónima
    return side * 4;
}
perimeterOfSquare = function (side) {return side * 4};
perimeterOfSquare = (side) => {return side * 4};
perimeterOfSquare = (side) => side * 4;
perimeterOfSquare = side => side * 4;

console.log(perimeterOfSquare(5));

console.log(typeof function() {});
console.log(typeof (() => {}));

//De función anónima a función de flecha

numbersArray.sort(function(a,b) {return a - b});
numbersArray.sort((a,b) => a - b); 

//Otra

let square2 = num => num * num;
console.log(square2(5));


// ----------------------- Bucles -----------------------------

for (let i= 0; i <= 10; i++) {
    console.log(`Ìndice: ${i}`);
}


//Definir y rellenar un array con el índice i

const arrayX = [];

for (let i= 0; i <= 10; i++) {
    arrayX.push(i);
}

console.log(arrayX);

//While

let contador = 0;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// while (1==1) {
//     break;
// }

// console.log("Hola");

// ForEach (Solo para arrays)

console.log(numbersArray);
numbersArray.forEach(function (value, index){
    console.log(`Índice ${index} : ${value}`);
});



