const library = []

const bookTemplate = document.querySelector('.book')
const bookContainer = document.querySelector('.book-container')

const addNewBookBtn = document.querySelector('#add-new')
const bookForm = document.querySelector('dialog');
const addBtn = bookForm.querySelector('#add-btn');
console.log(addBtn)

bookContainer.removeChild(bookTemplate)

function Book(title, author, pages, read = false){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read)

    library.push(book)

    return book;
}

function displayAllBooks(){
    let idx = 0
    library.forEach(book => {
        const bookElement = createNewBookElement(book)
        bookElement.setAttribute('data-index', idx++)
        bookContainer.appendChild(bookElement)
    })
}

function updateBookIndex(){
    let idx  = 0
    for(const child of bookContainer.children){
        child.setAttribute('data-index', idx++);
    }
}


function deleteBookFromLibrary(index){
    library.splice(index, 1)
}

function createNewBookElement(book){
    const bookElement = bookTemplate.cloneNode(true)

    const title = bookElement.querySelector('.title')
    const author = bookElement.querySelector('.author')
    const pages = bookElement.querySelector('.pages')
    const read = bookElement.querySelector('.read')
    const deleteBtn = bookElement.querySelector('button')

    title.textContent = book.title
    author.textContent = 'by ' + book.author
    pages.textContent = book.pages + ' pages'
    read.checked = book.read

    bookElement.setAttribute('data-index', library.length - 1)

    deleteBtn.addEventListener('click', e =>{
        deleteBookFromLibrary(bookElement.getAttribute('data-index'))
        bookContainer.removeChild(bookElement)
        updateBookIndex()
    })

    read.addEventListener('change' , e => {
        book.read = read.checked
    })

    return bookElement;

}

function createBookFromUserInput(event){
  
    event.preventDefault()

    const title = bookForm.querySelector('#titleInput').value
    const author = bookForm.querySelector('#authorInput').value
    const pages = parseInt(bookForm.querySelector('#pagesInput').value) 
    const read = bookForm.querySelector('#is-read').checked

   


    const book = addBookToLibrary(title, author, pages, read)

    const bookElement = createNewBookElement(book);

    bookContainer.appendChild(bookElement)

    bookForm.querySelector('form').reset()
    bookForm.close()

}



addNewBookBtn.addEventListener('click', e => bookForm.showModal())
addBtn.addEventListener('click', createBookFromUserInput)

addBookToLibrary('To the Moon', 'Tom Mich', 192, false)
addBookToLibrary('The First Man', 'Albert Camus', 435, true)
addBookToLibrary('The Creative Way', 'Rick Rubin', 254, false)

displayAllBooks()