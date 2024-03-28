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