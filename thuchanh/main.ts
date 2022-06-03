import {BookList} from "./BookList"
let book1 = new BookList('The Design of EveryDay Things', 'Don Norman', false);
let book2 = new BookList('The Most Human Human', 'Brian Christian', true);
let books: BookList[] = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfor = book._title + 'by' + book.author;
    if (book.alreadyRead) {
        console.log('You already ready' + bookInfor);
    } else {
        console.log('You still need to read' + bookInfor);
    }
}

