console.log('Hola');

//----------------- Uso de JS externo --------------------

function saludo () {
    alert("Hola desde un script externo");
    console.log('Has hecho click');
}
document.getElementsByTagName('a').item(2).addEventListener('click',saludo);

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
    }//ES6
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


// person = {
//     name: "John",
//     age: 30,
//     blonde: false,
//     children:[]
// } No hacer así

person.children = ["Martha", "Peter"];
console.log(person);
console.log(person.children[0]);

console.log(`Se llama ${person.name}, tiene ${person.age} años y tiene 2 hijos que se llaman ${person.children[0]} y ${person.children[1]} .`);

person.jump();
person.walk();

console.log(typeof {}, typeof[]);
