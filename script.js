const myLibrary = [];
const bookContainer = document.querySelector('.container')

function Book(title, auhtor, pages, read = false){
    this.title = title
    this.auhtor = auhtor
    this.pages = pages
    this.read = read
}

myLibrary.push(new Book('Midnight', 'Kelvin Monteiro', 112))
myLibrary.push(new Book('O Homem do Futuro', 'Thomas Setrof', 256))
myLibrary.push(new Book('To the moon', 'Hiroshi Nakata', 354))


function addBookToLibrary(){
    let title = prompt('Title: ');
    let author = prompt('Author: ');
    let pages = prompt('Nr. Pages: ');

    const book = new Book(title, author, pages);

    myLibrary.push(book);

}

function displayBooks(){
    
}

function createBookElement(book){
    const titleLabel = document.createElement('label')
    const authorLabel = document.createElement('label');
    const pagesLabel = document.createElement('label')

    const title = document.createElement('h2');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    titleLabel.textContent = 'Title: '
    authorLabel.textContent = 'Author: '
    pagesLabel.textContent = 'Pages: '

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages

    const bookElement = document.createElement('div');
    
    bookElement.append(titleLabel, title, authorLabel, author, pagesLabel, pages)

    return bookElement;
}