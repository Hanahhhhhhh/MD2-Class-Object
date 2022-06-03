export class BookList {
    _title: string;
    author: string;
    alreadyRead: boolean;

    constructor(title: string,
                author: string,
                alreadyRead: boolean) {
        this._title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}
