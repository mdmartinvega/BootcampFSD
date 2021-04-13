console.clear();
//Antes de ES6
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function () {
        let age = new Date().getFullYear() - this.year; //Accedemos a las propiedades del objeto desde el método
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    }
}

let myCar = new Car("Ford", "Mustang", 1990);
let myCar2 = new Car("Audi", "Q7", 2015);

myCar.getAge();

console.log(myCar, myCar2);//Solo se muestran las propiedades no los métodos

Car.getHP = function () { //No actualiza las instancias
    console.log("This car has 300 horsepower");
};

myCar.getHP = function () { //Solo modifica myCar
    console.log("This car has 300 horsepower");
};

console.log(myCar); //myCar con dos funciones

Car.prototype.getHP = function () { //Cambia el molde de los coches añadiendo la función
    console.log("This car has 400 horsepower");
};

myCar.getHP(); //Coge la función de el mismo que hemos añadido en el paso anterior
myCar2.getHP(); //Coge la función de la superclase Car ya que dentro de sí no hemos añadido
//la función por lo que salta a la superior.

function SUV(brand, model, year, width, height) { 
    Car.call(this, brand, model, year);
    this.width = width;
    this.height = height;
}

SUV.prototype = Object(Car.prototype);

let mySUV = new SUV("Audi", "Q3", 2017, 2200, 2000);

mySUV.getAge();
mySUV.getHP(); //No la encuentra porque está en el prototipo de Car por lo que insertamos
//SUV.prototype = Object(Car.prototype) despùés de la función

console.clear();
// -------------------- ES6 --------------------------

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }
    getType(){
        console.log(`I'm a normal book`);
    }
}

const book1 = new Book("Metamorphosis", "Franz Kafka", 1915);
console.log(book1);
book1.getType();
book1.getSummary();

//Subclases (Herencia)

class Magazine extends Book { //Magazine va a pertenecer a libro, herede sus propiedades
    
    constructor(title, author, year, month){//Añadir una nueva propiedad 
        super(title, author, year);
        this.month = month; 
    }
    
    getType(){
        super.getType(); //Accedes a las propiedades de la superclase
        console.log("I'm a magazine");
    }
}

const mag1 = new Magazine("Super Pop", "Algún loco", 2015);
console.log(mag1);

mag1.getType();
mag1.getSummary();
book1.getType();

// --- Otro ejemplo de polimorfismo ----

class Animal {
    constructor (type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }

    static compareAnimals(animal1, animal2) {   //Función auxiliar, de ayuda
        return animal1.type === animal2.type;
    }
};

class Feline extends Animal {
    constructor (type, name){
        super(type, name, "miau");
    }
}

class Panther extends Feline {
    constructor(name) {
        super("panther", name);
    }
}

class Cat extends Feline {
    constructor(name) {
        super("cat", name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("dog", name, "guau");
    }
}

const bizcocho = new Cat("Bizcocho");
const ramon = new Dog("Ramón");
const luna = new Dog("Luna");

console.clear();

luna.makeSound();
ramon.makeSound();
bizcocho.makeSound();

console.log(Animal.compareAnimals(luna, ramon));


