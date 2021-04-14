// Book Constructor
function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

// Data initialization
let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),
];

let displayedBooks = Array.from(books);// Copiamos array [...books]

// Selectors
const booksTbody = document.getElementById("books-body");
const tfoot = document.querySelector("tfoot");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

function updateTable() {
    // Vaciamos el tbody por completo
    booksTbody.innerHTML = "";
    
    // Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        booksTbody.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.sales}</td>
                <td>${book.price}</td>
                <td>
                    <button class="btn btn-danger" id="${book.id}">Remove</button>
                </td>
            </tr>`;
    });

    let totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.price, 0)
    tfoot.textContent = `Precio total ${totalPrice}`;
}

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);

        updateTable();
    }
};

updateTable();

function updateTableV2() {
    // Vaciamos el tbody por completo
    booksTbody.innerHTML = "";
    
    // Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        const newTr = document.createElement("tr");

        for (let property in book) {
            const newTd = document.createElement("td");
            newTd.textContent = book[property];
            newTr.appendChild(newTd);
        }
        
        const newRemoveButton = document.createElement("button");
        newRemoveButton.classList.add("btn", "btn-danger");
        newRemoveButton.id = book.id;
        newRemoveButton.textContent = "Remove";
        newRemoveButton.addEventListener("click", e => {
            displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
            updateTable();
        });
        
        newTr.appendChild(newRemoveButton);

        booksTbody.appendChild(newTr);
    });
}

// updateTableV2();

// Process form and add a new book
addBookButton.addEventListener("click", e => {
    e.preventDefault();
    
    const newID = books[books.length-1].id + 1;

    books.push(new Book(
            newID,
            titleInput.value,
            authorInput.value,
            salesInput.value,
            Number(priceInput.value)
    ));

    displayedBooks.push(new Book(
        newID,
        titleInput.value,
        authorInput.value,
        salesInput.value,
        Number(priceInput.value)
));

    updateTable();

    // titleInput.value = "";
    // authorInput.value = "";
    // salesInput.value = "";
    // priceInput.value = "";

    addBookButton.parentNode.reset();
});

//Ejercicio 5

const filterInput = document.querySelector("#filterInput");
const priceHeader = document.querySelector("#priceHeader");

let ascendingOrder = true;

filterInput.addEventListener("input", e => {
    displayedBooks = books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()));//se puede sustituir por filterInput.value
    updateTable();
});

//Apdo 2

priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;

    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;";

    displayedBooks.sort((book1, book2) => {
        return ascendingOrder ? book1.price - book2.price 
                              : book2.price - book1.price;
    });

    updateTable();
});
