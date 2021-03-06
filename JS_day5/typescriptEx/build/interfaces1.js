"use strict";
function aBook(b) {
    return `${b.title}, ${b.author}, ${b.published}, ${b.pages}`;
}
let book = { title: "Coraline", author: "Neil Gaiman", published: new Date, pages: 200 };
console.log("1b) " + aBook(book));
function aBookOp(title, author, published, pages) {
    //return published, pages ? {title, author, published, pages} : {title, author};
    return `${title}, ${author}, ${published}, ${pages}`;
}
let bookNotAll = aBookOp("OpTitle", "OpAuthor");
console.log("1d) " + bookNotAll);
book.author = "ffff";
console.log("1e) " + aBookOp(book.title, book.author));
console.log("Why can I still change author??");
// Java Way
/*
interface IBook {
    title: string;
    author: string;
    published?: Date;
    pages?: number;
}

function logger(a: IBook) {
    console.log(`T: ${a.title}, A: ${a.author}, PU: ${a.published}, PA: ${a.pages}`);
}

class Book implements IBook {
    title: string
    author: string
    published: Date
    pages: number
    constructor (title:string, author:string, published:Date, pages:number) {
        this.title = title
        this.author = author
        this.published = published
        this.pages = pages
    }
    toString():string {return `${this.title}, ${this.author}, ${this.published}, ${this.pages}`}
}

const date = new Date();

const b1 = new Book("Coraline", "Neil Gaiman", date, 200);

logger(b1);
console.log(b1.toString());
*/
//# sourceMappingURL=interfaces1.js.map