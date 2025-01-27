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
// might be more efficient to just remove every book in the shelf and then add all the books back?
// instead of trying to see if the book exists and then if not, add it.

function removeBookFromLibrary(book) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (book.title === myLibrary[i].title && book.author === myLibrary[i].author) {
            myLibrary.splice(i,1);
            i--;
        }
    }
}

function readBookFromLibrary(book) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (book.title === myLibrary[i].title && book.author === myLibrary[i].author) {
            myLibrary[i].toggleRead();
        }
    }
}

function addLibraryToShelf(book) {
    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("book");

    const newTitleDiv = document.createElement("div");
    newTitleDiv.classList.add("title");
    newTitleDiv.textContent = book.title;

    const newAuthorDiv = document.createElement("div");
    newAuthorDiv.classList.add("author");
    newAuthorDiv.textContent = book.author;

    const isReadDiv = document.createElement("div");
    isReadDiv.classList.add("isread");
    isReadDiv.textContent = `Read? ${book.isRead}`;

    const btnToggleRead = document.createElement("button");
    btnToggleRead.id = "toggle-read";
    btnToggleRead.textContent = "Toggle Read";

    btnToggleRead.addEventListener("click", (e) => {
        const myParent = e.target.parentElement;
        const title = myParent.querySelector(".title").textContent;
        const author = myParent.querySelector(".author").textContent;
        const readThisBook = new Book(title, author);
        readBookFromLibrary(readThisBook);
        updateShelf();
    });

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("delete");
    btnDelete.textContent = "Delete";

    btnDelete.addEventListener("click", (e) => {
        const myParent = e.target.parentElement;
        const title = myParent.querySelector(".title").textContent;
        const author = myParent.querySelector(".author").textContent;
        const removeThisBook = new Book(title, author);
        removeBookFromLibrary(removeThisBook);
        updateShelf();
    });

    newBookDiv.appendChild(newTitleDiv);
    newBookDiv.appendChild(newAuthorDiv);
    newBookDiv.appendChild(isReadDiv);
    newBookDiv.appendChild(btnToggleRead);
    newBookDiv.appendChild(btnDelete);

    bookshelf.appendChild(newBookDiv);
}

function updateShelf() {
    bookshelf.replaceChildren(); //to clear existing shelf
    myLibrary.forEach(book => addLibraryToShelf(book));
}

updateShelf();

const dialog = document.getElementById("dialog");
const btnSubmitBook = document.getElementById("submit-book");
const formNewBook = document.getElementById("new-book");
const btnAddBook = document.getElementById("add-book");

btnAddBook.addEventListener("click", () => dialog.showModal());

btnSubmitBook.addEventListener("click", (e) => {
    e.preventDefault();
    const newTitle = document.getElementById("title").value;
    const newAuthor = document.getElementById("author").value;
    const newIsRead = document.getElementById("isread").value;
    dialog.close();
    formNewBook.reset();
    addBookToLibrary(newTitle, newAuthor, newIsRead);
    updateShelf();
})