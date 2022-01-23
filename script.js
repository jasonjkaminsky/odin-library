const addBkBtn = document.querySelector(".addBkBtn");
const bookContainer = document.querySelector(".bookContainer");
const infoInput = document.querySelector(".infoInput");

// ~ object constructor function ~ //
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`;
    };
}

let book1 = new Book("1984", "George Orwell", "328", "not read yet");

// console.log(book1.info());

const getBookInfo = function () {
    console.log("you clicked me");
    infoInput.style.display = "inline";
};

// const bkIntoContainer = function (newBook) {
//      newBook.appendChild(bookContainer);
//  };

addBkBtn.addEventListener("click", getBookInfo);
