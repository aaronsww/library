let myLibrary = [];

function book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = () => { return title+' by '+author+', '+pages+', '+status }
}

const book1 = new book('The Hobbit','J.R.R. Tolkien',295,'not read yet')

function addBook(){
    
}

console.log(book1.info())

