import {Book} from "./Book";
import {BookManager} from "./BookManager";

let book1 = new Book('B001','Lap trinh Java');
let book2 = new Book('B002','Lap trinh PHP');
let book3 = new Book('B003','Lap trinh TypeScript');

let bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);

bookManager.update('B003', 'lap trinh MySQL')
console.log(bookManager.getList())
