class Book {
    constructor(title, author, isRead) {
        this.title = title;
        this.author = author;
        if(isRead === true || isRead === false) {
            this.isRead = isRead;
        } else {
            this.isRead = false;
        }
    }

    get bookInfo() {
        return `${this.title}, by ${this.author}. Read?: ${this.isRead}`;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, isRead) {
        this.books.push(new Book(title,author,isRead));
    }

    removeBook(book) {
        for(let i=0; i<this.books.length; i++) {
            if(book.title === this.books[i].title && book.author === this.books[i].author) {
                this.books.splice(i,1);
                i--;
            }
        }
    }

    readBook(book) {
        for(let i=0; i<this.books.length; i++) {
            if(book.title === this.books[i].title && book.author === this.books[i].author) {
                this.books[i].toggleRead();
            }
        }
    }
    
    
}

const myLibrary = new Library();

myLibrary.addBook("Book1", "Author1", true);
myLibrary.addBook("Book2", "Author2", false);
myLibrary.addBook("Book3", "Author3", false);

console.table(myLibrary);

const bookshelf = document.querySelector(".bookshelf");

//add book to bookshelf
//TODO:
// -> Add delete button to each book, with onclick for delete function
// -> create delete function
// might be more efficient to just remove every book in the shelf and then add all the books back?
// instead of trying to see if the book exists and then if not, add it.

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
        myLibrary.readBook(readThisBook);
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
        myLibrary.removeBook(removeThisBook);
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
    myLibrary.books.forEach(book => addLibraryToShelf(book));
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
    myLibrary.addBook(newTitle, newAuthor, newIsRead);
    updateShelf();
})