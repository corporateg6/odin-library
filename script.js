const myLibrary = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
}

Book.prototype.bookInfo = function () {
    return `${this.name}, by ${this.author}`;
}

function addBookToLibrary(name, author) {
    const newBook = new Book(name, author);
    myLibrary.push(newBook);
}

addBookToLibrary("Book1", "Author1");
addBookToLibrary("Book2", "Author2");
addBookToLibrary("Book3", "Author3");

console.table(myLibrary);

const bookshelf = document.querySelector(".bookshelf");

myLibrary.forEach(book => console.log(book.bookInfo()));

const newBookDiv = document.createElement("div");
newBookDiv.classList.add("book");


const newTitleDiv = document.createElement("div");
newTitleDiv.classList.add("title");
newTitleDiv.textContent = "new title";

const newAuthorDiv = document.createElement("div");
newAuthorDiv.classList.add("author");
newAuthorDiv.textContent = "new author";

newBookDiv.appendChild(newTitleDiv);
newBookDiv.appendChild(newAuthorDiv);

bookshelf.appendChild(newBookDiv);


