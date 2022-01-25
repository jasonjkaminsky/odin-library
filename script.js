const addBkBtn = document.querySelector(".addBkBtn");
const bookLibrary = document.querySelector("#bookLibrary");
const infoInput = document.querySelector(".infoInput");
const addBtn = document.querySelector(".addBtn");

let myLibrary = [];

// ~ object constructor function ~ //
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

// ~ adds function to book prototype ~ //
// Book.prototype.addBook = function (event) {
//     myLibrary.push(this);
//     createCards();
// };

const addBook = (book) => myLibrary.push(book);

//  takes input and creates a new book, then adds to myLibrary array  //
// function addBookToLibrary(title, author, pages, haveRead) {
//     let newBook = new Book();
//     newBook.addBook();
// }

// create HTML cards to display all books
const createCards = function () {
    console.log("createCards ran!");
    console.log(myLibrary);
    for (let i = 0; i < myLibrary.length; i++) {
        // create new card
        // also adds a data tag for the index in myLibrary array
        let newCardDiv = document.createElement("div");
        newCardDiv.classList.add("card-holder");
        newCardDiv.setAttribute("index", "index" + i);
        bookLibrary.appendChild(newCardDiv);

        let newFront = document.createElement("div");
        newFront.classList.add("card-front");

        //    let newBack = document.createElement("div");
        //    newBack.classList.add("card-back");
        //    cardFlip.appendChild(newBack);

        // create title div and add book's title as text
        let newTitle = document.createElement("div");
        newTitle.classList.add("title");
        newFront.appendChild(newTitle);
        //    let cardTitle = myLibrary[i].title.toUpperCase();
        //    newTitle.innerText = cardTitle;

        // create author div and add book's author as text
        let newAuthor = document.createElement("div");
        newAuthor.classList.add("author");
        newFront.appendChild(newAuthor);
        let cardAuthor = myLibrary[i].author;
        newAuthor.innerText = cardAuthor;

        // create pages div and add book's # of pages as text
        let newPages = document.createElement("div");
        newPages.classList.add("pages");
        newFront.appendChild(newPages);
        let cardPages = myLibrary[i].pages;
        newPages.innerText = cardPages + " pages";
    }
};

// function AddNewBook(title, author, pages, haveRead) {}
// // ~ after creating the constructor for AddNewBook, set its prototype to a new object that has a copy of Book.prototype ~ //
// AddNewBook.prototype = Object.create(Book.prototype);

// let book1 = new Book("1984", "George Orwell", "328", "not read yet");

// const addDiv = function () {
//     const newDiv = document.createElement("div");
//     const newContent = document.createTextNode(
//         "Title: ${this.title}, Author: ${this.author}"
//     );
//     newDiv.appendChild(newContent);
//     const libraryDiv = document.getElementById("bookLibrary");
//     libraryDiv.append(newDiv);
// };

const showInputBoxes = function () {
    console.log("you clicked me");
    infoInput.style.display = "inline";
};

// const inputSubmit = function () {
//     title = document.getElementById("input-title").value;
//     author = document.getElementById("input-author").value;
//     pages = document.getElementById("input-pages").value;
//     pages = parseInt(pages);
//     haveRead = document.getElementById("input-haveRead").value;

//     console.log(title, author, pages, haveRead);
//     addBookToLibrary(title, author, pages, haveRead);
// };

addBtn.onclick = () => {
    const title = document.getElementById("input-title").value;
    const author = document.getElementById("input-author").value;
    const pages = document.getElementById("input-pages").value;
    const haveRead = document.getElementById("input-haveRead").checked;

    if (title === "") {
        alert("Please enter book title !");
    } else if (author === "") {
        alert("Please enter book author !");
    } else if (pages === "") {
        alert("Please enter number of book pages !");
    } else if (!Number.isFinite(Number(pages))) {
        alert("Number of pages must be number !!!");
    } else {
        addBook(new Book(title, author, pages, haveRead));
    }
};

addBkBtn.addEventListener("click", showInputBoxes);

console.log(myLibrary);
// putLibrary.addEventListener("click", addBookToLibrary);

// let book1 = new Book("1984", "George Orwell", "328", "not read yet");

// console.log(book1.info());
