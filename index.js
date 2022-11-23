let myLibrary = [];
let i;
let c = 1;
let d = 1;

const mainContainer = document.querySelector(".mainContainer")
function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

myLibrary[0] = new Book('The Hobbit','J.R.R. Tolkien','295 pages','Not read')

 /*function addBook(){
     for(i = 1; i < 2; i++)
     {
        let userTitle = prompt("Enter title")
        let userAuthor = prompt("Enter author")
        let userPages = prompt("Enter total pages")
        let userStatus = prompt("Enter status")
        myLibrary[i] = new Book (userTitle, userAuthor, userPages, userStatus)
    }
 }

addBook()   */

title.textContent = myLibrary[0].title;
author.textContent = myLibrary[0].author;
pages.textContent = myLibrary[0].pages;
state.textContent = myLibrary[0].status;
removeBtn.textContent = "Remove from list"

let popup = document.getElementById("popUp");

function openPopup(){
    popup.classList.add("open-popup");

}

function closePopup(){
    popup.classList.remove("open-popup");
}
 
const create = document.querySelector(".create");   
  
create.addEventListener('click', () => {
    const parentBook = document.createElement('div');

    const childTitle = document.createElement('div');
    childTitle.setAttribute('id','title');
    const bookName = document.querySelector("#bookName")
    childTitle.textContent = bookName.value

    const childAuthor = document.createElement('div');
    childAuthor.setAttribute('id','author');
    const authorName = document.querySelector("#authorName")
    childAuthor.textContent = authorName.value

    const childPages = document.createElement('div');
    childPages.setAttribute('id','pages');
    const totalPages = document.querySelector("#totalPages")
    childPages.textContent = `${totalPages.value} pages`;

    const childStatus = document.createElement('button');
    childStatus.setAttribute('id','state');
     
    const readStatus = document.querySelector("#readStatus")
    if (readStatus.checked) {
      childStatus.classList.add("readIt");
      childStatus.textContent = "Read";   
    } else {
        childStatus.classList.add("notReadIt");
        childStatus.textContent = "Not read";
    }

    childStatus.addEventListener('click', () => { 
        d++
    if(d%2==0)
    {
        childStatus.setAttribute("style", "background-color: #52b788;");
        childStatus.textContent = "Read"
    } 
    else  
    {
        childStatus.setAttribute("style", "background-color: #f5999c;");
        childStatus.textContent = "Not read"
    }
     })
   
    const removeOption = document.createElement('button');
    removeOption.setAttribute('id','removeBtn');
    removeOption.textContent = "Remove from list"

    parentBook.appendChild(childTitle)
    parentBook.appendChild(childAuthor)
    parentBook.appendChild(childPages)
    parentBook.appendChild(childStatus) 
    parentBook.appendChild(removeOption)
    parentBook.classList.add("bookItself");

    mainContainer.appendChild(parentBook)
})

removeBtn.addEventListener('click', () => {
    const bookItself = document.querySelector(".bookItself");   
    mainContainer.removeChild(bookItself)
});

create.addEventListener('click', (e) => {
    e.preventDefault() });
    
const stateBtn = document.querySelector("#state")
stateBtn.addEventListener('click', () => { 
    c++
    if(c%2==0)
    {
        stateBtn.setAttribute("style", "background-color: #52b788;");
        stateBtn.textContent = "Read"
    } 
    else  
    {
        stateBtn.setAttribute("style", "background-color: #f5999c;");
        stateBtn.textContent = "Not read"
    }
 })
