
if(localStorage.getItem('user')===null||localStorage.getItem('user-login')===null){
    alert('Please Register or login')
    window.location.replace('/')
}

let user = localStorage.getItem('user')

class Book{
    constructor(name,des,price){
        this.name = name;
        this.des = des;
        this.price = price;
        this.owner
        this.owner_email
    }
}

const book_name = document.getElementById('name-inp')
const des_inp = document.getElementById('des-inp')
const price_inp = document.getElementById('price-inp')
const sumbmit = document.getElementById('submit-btn')

sumbmit.onclick = ()=>{
    let name = book_name.value
    let des = des_inp.value
    let price = price_inp.value

    let book = new Book(name,des,price)
    book.owner = user.name
    book.owner_email = user.email
    alert("Book Added For Sale")
    let json_book = JSON.stringify(book)
}

