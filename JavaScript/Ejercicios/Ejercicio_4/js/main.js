/*2. Crear un constructor de objeto Book con los siguientes atributos: ID, título, autor, ventas y precio.*/

function Book (title, author, sales, prize, something) {
    this.id = 0;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.prize = prize;
    this.something = something;
};

// 3. Rellenar un array con 10 libros.

const books = [
    new Book("The Selfish Gene", "Richard Dawkins", "740120", "12", ""),
    new Book("The God Delusion", "Richard Dawkins", "610120", "15", ""),
    new Book("La nueva mente del emperador", "Roger Penrose", "120000", "17", ""),
    new Book("Sapiens", "Yuval Noah", "747820", "16", ""),
    new Book("The Selfish Gene", "Richard Dawkins", "748710", "15", ""),
    new Book("Gene", "Yuval Noah", "740321", "10", ""),
    new Book("The Selfish", "Roger Penrose", "769820", "19", ""),
    new Book("Selfish", "Richard Dawkins", "746510", "13", ""),
    new Book("The La nueva mente", "Yuval Noah", "789120", "12", ""),
    new Book("La nueva mente", "Roger Penrose", "740117", "18", "")
];

/*4. Para cada elemento del array, tendremos crear una nueva fila en la tabla con las columnas para todas las 
propiedades del objeto además de un botón para poder eliminar el libro.
Se aconseja la creación de una función para actualizar la tabla (o el tbody) desde cero.*/


const headerTable = document.querySelector(".rowHead");
const bodyTable = document.querySelector(".tBody");
headerTable.innerHTML += `<td><b>#</b></td>
                          <td><b>Title</b></td>
                          <td><b>Author</b></td>
                          <td><b>Sales</b></td>
                          <td><b>Price</b></td>
                          <td><b>Remove</b></td>`;


function fillData (){

    bodyTable.innerHTML = "";


    for (const book of books) {
    let newFila = document.createElement("tr");
    // newFila.classList.add = "trBody";
    bodyTable.appendChild(newFila);
    

        for (const properties in book) {//Aceder a las propiedades de un objeto
            for (let index = 0; index < books.length; index++) {
                books[index].id = index + 1;   
            };
            const value = book[properties];
            let dataBook = document.createElement("td");
            dataBook.innerHTML = value;
            newFila.appendChild(dataBook)}; 

    newFila.lastChild.innerHTML += `<button class="btn btn-danger">Eliminar</button>`;
    };
};

fillData();

// 5. Si el botón de eliminar es pulsado, borrará el libro del array y actualizará la tabla.

const createdButton = document.getElementsByClassName("btn-danger");
const fila = document.getElementsByTagName("tr");

Array.from(createdButton).forEach(element => {
    element.addEventListener("click", function(event){
        // event.target.parentNode.parentNode.remove();
        index = books.indexOf(event.target);
        books.splice(index, 1);
        fillData();
    });
    
});


// 6. Añadir un pequeño formulario después de la tabla para poder anexar un nuevo libro a nuestro array. Tras 
// hacer submit, además de añadirlo, deberá actualizar la tabla y vaciar los inputs.

const save = document.querySelector(".save");

const title =document.querySelector(".title");
const author =document.querySelector(".author");
const sales =document.querySelector(".sales");
const price =document.querySelector(".price");

const inputs = document.getElementsByTagName("input");


save.addEventListener("click", function(e) {
    books.push(new Book(title.value, author.value, sales.value, price.value, ""));
    for (const input of inputs) {
        input.value ="";
    }
    fillData();

});