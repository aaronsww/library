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
     for(i = 1; i < 2; i++)
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
 
const create = document.querySelector(".create")
  

create.addEventListener('click', () => {
    const bookName = document.querySelector("#bookName")
    const title2 = document.querySelector("#title2")
    title2.textContent = bookName.value

    const authorName = document.querySelector("#authorName")
    const author2 = document.querySelector("#author2")
    author2.textContent = authorName.value

    const totalPages = document.querySelector("#totalPages")
    const pages2 = document.querySelector("#pages2")
    pages2.textContent = totalPages.value

    const readStatus = document.querySelector("#readStatus")
    const state2 = document.querySelector("#state2")
    state2.textContent = readStatus.value
})
