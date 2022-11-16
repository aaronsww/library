let myLibrary = [];
let i;


function book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = () => { return title+' by '+author+', '+pages+', '+status }
}

let book1 = new book('The Hobbit','J.R.R. Tolkien',295,'not read yet')


myLibrary[0] = book1

 function addBook(){
     for(i = 1; i < 4; i++)
     {
        let userTitle = prompt("Enter title")
        let userAuthor = prompt("Enter author")
        let userPages = prompt("Enter total pages")
       let userStatus = prompt("Enter status")
    //    myLibrary[i] = {userTitle, userAuthor, userPages, userStatus}
       myLibrary[i] = new book (userTitle, userAuthor, userPages, userStatus)
    }
 }

 //addBook()   
 
console.log(book1.title)

