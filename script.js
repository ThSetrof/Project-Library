const myLibrary = [];
const bookContainer = document.getElementById('bookContainer')
const addBookBtn = document.getElementById('addBookBtn')
const addBookDialog = document.getElementById('addBookDialog')
const saveBookBtn = document.getElementById('saveBookBtn')
const cancelBtn = document.getElementById('cancelBtn')

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.changeStatus = function(){
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return book;
}

function createElement(tag, tagClass = '', tagId = ''){
    const elem = document.createElement(tag);
    elem.className = tagClass;
    elem.id = tagId;


    console.log('element create ', elem);

    return elem;
}

function createBookCard(book) {
    const bookCard = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement('p');
    const pages = document.createElement('span');
    const readBtn = createElement('button', 'button', 'readBtn')
    const removeBtn = createElement('button', 'button', 'removeBtn')
    bookCard.setAttribute('data-id', book.id);

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + ' pages';
    readBtn.textContent =(book.read === true) ? 'Read' : 'Not Read';
    removeBtn.textContent = 'Remove'
    
    bookCard.className = 'bookCard';

    bookCard.append(title, author, pages, readBtn, removeBtn);

    return bookCard;

}


function clearBookContainer(){
    bookContainer.textContent = '';
}

function addAllBooksToContainer(){
    for(let book of myLibrary){
        bookContainer.appendChild(createBookCard(book))
        
    }
}

function addBookToContainer(book){
    const bookCard = createBookCard(book);
    bookContainer.appendChild(bookCard);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);
addBookToLibrary("The Silmarillion", "J.R.R. Tolkien", 365, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Animal Farm", "George Orwell", 112, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", 194, true);


addAllBooksToContainer();

addBookBtn.addEventListener('click', () => {
    addBookDialog.showModal()
})

cancelBtn.addEventListener('click', e => {
    e.preventDefault()
    addBookDialog.close()
})

saveBookBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = addBookDialog.querySelector('form'); // Get the form element

    if (form.checkValidity()) { // Check if the form is valid
        const formData = new FormData(form); // Create a FormData object from the form

        // Get input values using FormData
        const title = formData.get('title');
        const author = formData.get('author');
        const pages = parseInt(formData.get('pages')); // Convert pages to a number
        const read = formData.get('status') === 'read'; // Convert status to a boolean

        // Add the new book to the library
        const book = addBookToLibrary(title, author, pages, read);

        // Update the displayed books
        addBookToContainer(book);

        // Close the dialog
        addBookDialog.close();

        // Reset the form fields
        form.reset();
    } else {
        // If the form is not valid, trigger the browser's validation UI
        form.reportValidity();
    }
});

bookContainer.addEventListener('click', e => {
    const bookCard = e.target.closest('.bookCard');
    if (!bookCard) return;

    const bookId = bookCard.getAttribute('data-id');
    const book = myLibrary.find(b => b.id === bookId);

    if (e.target.id === 'readBtn') {
        book.changeStatus()
        e.target.textContent = book.read ? 'Read' : 'Not Read';
    }

    if (e.target.id === 'removeBtn') {
        const bookIndex = myLibrary.findIndex(b => b.id === bookId);
        if (bookIndex !== -1) {
            myLibrary.splice(bookIndex, 1);
        }
        bookCard.remove();
        console.log('myLibrary :>> ', myLibrary);
    }
});