let myLibrary = [];
let i;

function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

myLibrary[0] = new Book('The Hobbit','J.R.R. Tolkien',295,'not read yet')

 function addBook(){
     for(i = 1; i < 4; i++)
     {
        let userTitle = prompt("Enter title")
        let userAuthor = prompt("Enter author")
        let userPages = prompt("Enter total pages")
        let userStatus = prompt("Enter status")
        myLibrary[i] = new Book (userTitle, userAuthor, userPages, userStatus)
    }
 }

 //addBook()   

title.textContent = myLibrary[0].title;
author.textContent = myLibrary[0].author;
pages.textContent = myLibrary[0].pages;
state.textContent = myLibrary[0].status;
 
 
  

