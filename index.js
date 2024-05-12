function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.displayInfo = function (){
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
};
let library = [];

function addBook(title, author, pages){
    const newBook = new Book (title, author, pages);
    library.push(newBook)
}
function searchBooks(query){
    return library.filter(book => book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()))
}
function filterBooksByPages(){
    return library.filter(book => book.pages > 100);
}
 function mapBookDetails(){
    return library.map(book => ({
        title: `Title: ${this.title}`,
        author:`Author: ${this.author}`,
        pages: `Pages: ${this.pages}`
    }));
 }

addBook("1984", "George Orwell", 328);
addBook("The Hobbit", "J.R.R. Tolkien", 310);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 99);

library.forEach(book => book.displayInfo());