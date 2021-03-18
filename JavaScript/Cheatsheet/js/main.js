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

// -----------------Tipos de datos---------------------

let str = String("I'm a string");
let str2 = "I'm another string";
let str3 = "";
console.log(typeof str, typeof str2, typeof str3);

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");

