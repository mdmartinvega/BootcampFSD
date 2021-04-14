/*2. Crear un constructor de objeto Book con los siguientes atributos: ID, título, autor, ventas y precio.*/

function Book (title, author, sales, prize) {
    this.id = 0;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.prize = prize;
    
};

// 3. Rellenar un array con 10 libros.

let books = [
    new Book("The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book("The God Delusion", "Richard Dawkins", 610120, 15),
    new Book("La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book("Sapiens", "Yuval Noah", 747820, 16),
    new Book("The Selfish Gene", "Richard Dawkins", 748710, 15),
    new Book("Gene", "Yuval Noah", 740321, 10),
    new Book("The Selfish", "Roger Penrose", 769820, 19),
    new Book("Selfish", "Richard Dawkins", 746510, 13),
    new Book("The La nueva mente", "Yuval Noah", 789120, 12),
    new Book("La nueva mente", "Roger Penrose", 740117, 18)
];
let booksToDisplay = Array.from(books); //Copiamos el array original [...book]


/*4. Para cada elemento del array, tendremos crear una nueva fila en la tabla con las columnas para todas las 
propiedades del objeto además de un botón para poder eliminar el libro.
Se aconseja la creación de una función para actualizar la tabla (o el tbody) desde cero.*/


const headerTable = document.querySelector(".rowHead");
const bodyTable = document.querySelector(".tBody");
const search = document.querySelector(".search");
const tfoot = document.querySelector("tfoot");
headerTable.innerHTML += `<th><b>#</b></th>
                          <th><b>Title</b></th>
                          <th><b>Author</b></th>
                          <th><b>Sales</b></th>
                          <th id="priceSort" style="cursor: pointer"><b>Price</b></th>
                          <th><b>Remove</b></th>`;

function fillData (){

    bodyTable.innerHTML = ""; //Vaciar tabla
    booksToDisplay = books.filter(book => book.title.toLowerCase().includes(search.value.toLowerCase()));

    for (const book of booksToDisplay) { //Crear filas
        let newFila = document.createElement("tr");
        bodyTable.appendChild(newFila);
    
            //Crear td
            for (const properties in book) {//Aceder a las propiedades de un objeto
                for (let index = 0; index < booksToDisplay.length; index++) {//Crear id
                    books[index].id = index + 1;   
                };
                const value = book[properties];
                let dataBook = document.createElement("td");
                dataBook.innerHTML = value;
                newFila.appendChild(dataBook)
            }; 

        newFila.innerHTML += `<td><button class="btn btn-danger" id="${book.id}">Eliminar</button></td>`;

    
    };
    
};

fillData();

// 5. Si el botón de eliminar es pulsado, borrará el libro del array y actualizará la tabla.

bodyTable.onclick = e => {
    if (e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        fillData();
    }
};


// 6. Añadir un pequeño formulario después de la tabla para poder anexar un nuevo libro a nuestro array. Tras 
// hacer submit, además de añadirlo, deberá actualizar la tabla y vaciar los inputs.

const save = document.querySelector(".save");

const title =document.querySelector(".title");
const author =document.querySelector(".author");
const sales =document.querySelector(".sales");
const price =document.querySelector(".price");

const inputs = document.getElementsByTagName("input");


save.addEventListener("click", function() {
    books.push(new Book(title.value, author.value, sales.value, price.value, ""));
    for (const input of inputs) {
        input.value ="";
    }
    booksToDisplay.push(new Book(title.value, author.value, sales.value, price.value, ""));
    for (const input of inputs) {
        input.value ="";
    }
    fillData();
});

// ---------------- Ejercicio 5 -------------------------

/*1. Realizar una tabla filtrable. Tendremos un input de búsqueda y una tabla de libros rellena
por JavaScript. Cada vez que cambie el input, se actualizará la tabla para que aparezcan
sólo los libros cuyos títulos contengan lo que estamos introduciendo en el input.
Partiremos del ejercicio 4 en lo que nos haga falta.*/

search.addEventListener("input", fillData);

/*2. Añadiremos un botón para ordenar la tabla por el precio de forma creciente / decreciente.
(Efecto toggle).*/

const priceSort = document.getElementById("priceSort");
let ascendingOrder = true;

priceSort.addEventListener("click", () => {
    ascendingOrder = !ascendingOrder;
    ascendingOrder 
                ? books.sort((book1, book2) => book1.prize - book2.prize)
                : books.sort((book1, book2) => book2.prize - book1.prize); 


    fillData();

});


/*3. Añadiremos una última fila en tfoot, separada del resto, que nos sume los precios de los
libros que están presentes en la tabla en ese momento.*/

