let myLibrary = [];
let i;

const mainContainer = document.querySelector(".mainContainer")
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
    const parentBook = document.createElement('div');

    const childTitle = document.createElement('div');
    const bookName = document.querySelector("#bookName")
    childTitle.textContent = bookName.value

    const childAuthor = document.createElement('div');
    const authorName = document.querySelector("#authorName")
    childAuthor.textContent = authorName.value

    const childPages = document.createElement('div');
    const totalPages = document.querySelector("#totalPages")
    childPages.textContent = totalPages.value

    const childStatus = document.createElement('div');
    const readStatus = document.querySelector("#readStatus")
    childStatus.textContent = readStatus.value
   
    parentBook.appendChild(childTitle)
    parentBook.appendChild(childAuthor)
    parentBook.appendChild(childPages)
    parentBook.appendChild(childStatus) 
    parentBook.classList.add("bookItself");

    mainContainer.appendChild(parentBook)
})



