"use strict";
exports.__esModule = true;
var BookList_1 = require("./BookList");
var book1 = new BookList_1.BookList('The Design of EveryDay Things', 'Don Norman', false);
var book2 = new BookList_1.BookList('The Most Human Human', 'Brian Christian', true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfor = book._title + 'by' + book.author;
    if (book.alreadyRead) {
        console.log('You already ready' + bookInfor);
    }
    else {
        console.log('You still need to read' + bookInfor);
    }
}
