import { Book } from "./Book";
export declare class BookManager {
    books: Book[];
    constructor();
    add(book: Book): void;
    getList(): Book[];
    delete(ID: string): void;
    update(ID: string, name: string): void;
    findBook(ID: string): number;
}
