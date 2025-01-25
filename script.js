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

function addBookToLibrary(title, author) {
    const newBook = new Book(title, author);
    myLibrary.push(newBook);
}

addBookToLibrary("Book1", "Author1");
addBookToLibrary("Book2", "Author2");
addBookToLibrary("Book3", "Author3");

console.table(myLibrary);

const bookshelf = document.querySelector(".bookshelf");

myLibrary.forEach(book => console.log(book.bookInfo()));


//add book to bookshelf
//TODO: turn into a function
// -> Add delete button to each book, with onclick for delete function
// -> create delete function
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
//end function

