const myLibrary = [];

function Book(title, author, isRead) {
    this.title = String(title);
    this.author = String(author);
    if (isRead === true || isRead === false) {
        this.isRead = isRead;
    } else {
        this.isRead = false;
    }
    
}

Book.prototype.bookInfo = function () {
    return `${this.title}, by ${this.author}. Read?: ${this.isRead}`;
}

Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead; 
}

function addBookToLibrary(title, author, isRead) {
    const newBook = new Book(title, author, isRead);
    myLibrary.push(newBook);
}

addBookToLibrary("Book1", "Author1", true);
addBookToLibrary("Book2", "Author2", false);
addBookToLibrary("Book3", "Author3", false);

console.table(myLibrary);

const bookshelf = document.querySelector(".bookshelf");

//add book to bookshelf
//TODO:
// -> Add delete button to each book, with onclick for delete function
// -> create delete function

function addBookToShelf(book) {
    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("book");

    const newTitleDiv = document.createElement("div");
    newTitleDiv.classList.add("title");
    newTitleDiv.textContent = book.title;

    const newAuthorDiv = document.createElement("div");
    newAuthorDiv.classList.add("author");
    newAuthorDiv.textContent = book.author;

    //TODO update to add something to indicate the read status of the book
    // const newReadDiv = document.createElement("div");
    // newReadDiv.classList.add("author");
    // newReadDiv.textContent = book.author;



    newBookDiv.appendChild(newTitleDiv);
    newBookDiv.appendChild(newAuthorDiv);

    bookshelf.appendChild(newBookDiv);
}

myLibrary.forEach(book => addBookToShelf(book));