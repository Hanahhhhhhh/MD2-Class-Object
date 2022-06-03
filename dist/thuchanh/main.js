"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookList_1 = require("./BookList");
let book1 = new BookList_1.BookList('The Design of EveryDay Things', 'Don Norman', false);
let book2 = new BookList_1.BookList('The Most Human Human', 'Brian Christian', true);
let books = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfor = book._title + 'by' + book.author;
    if (book.alreadyRead) {
        console.log('You already ready' + bookInfor);
    }
    else {
        console.log('You still need to read' + bookInfor);
    }
}
//# sourceMappingURL=main.js.map