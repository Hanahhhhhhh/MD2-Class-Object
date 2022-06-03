"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
const BookManager_1 = require("./BookManager");
let book1 = new Book_1.Book('B001', 'Lap trinh Java');
let book2 = new Book_1.Book('B002', 'Lap trinh PHP');
let book3 = new Book_1.Book('B003', 'Lap trinh TypeScript');
let bookManager = new BookManager_1.BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
bookManager.update('B003', 'lap trinh MySQL');
console.log(bookManager.getList());
//# sourceMappingURL=main.js.map