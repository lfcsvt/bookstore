function getData() {
    fetch('https://api.myjson.com/bins/udbm5')
        .then(response => response.json())
        .then(response => {
            const books = response.books
            main(books)
        })
}
window.onload = () => {
    getData()
    search()
}

function main(books) {
    createBooks(books)
}

function createBooks(books) {
    var bookstore = document.getElementById('bookstore')


    books.forEach(book => {
        book
        var tittleText = book.titulo
        var imageContent = book.portada
        var backImageContent = book.detalle
        var description = book.descripcion
        var flipContainer = document.createElement('div')
        flipContainer.setAttribute('class', 'flip-card')
        var book = document.createElement('div')
        book.setAttribute('class', 'flip-card-inner')
        var tittle = document.createElement('h3')
        tittle.setAttribute('class', 'book-tittle')
        var image = document.createElement('img')
        image.setAttribute("class", "front-image")
        image.setAttribute('src', imageContent)
        var bookFront = document.createElement('div')
        bookFront.setAttribute('class', 'flip-card-front')
        var backImage = document.createElement('img')
        backImage.setAttribute("class", "back-image")
        var bookBack = document.createElement('div')
        var bookDescript = document.createElement('p')
        var buttton = document.createElement('button')
        buttton.setAttribute('type', 'button')
        buttton.setAttribute('class', 'btn btn-lg btn-primary')
        bookBack.setAttribute('class', 'flip-card-back')
        backImage.setAttribute('src', backImageContent)
        tittle.innerHTML = tittleText
        bookDescript.innerHTML = description
        bookBack.appendChild(tittle)
        bookBack.appendChild(bookDescript)
        bookFront.appendChild(image)
        bookBack.appendChild(backImage)
        bookBack.appendChild(buttton)
        book.appendChild(bookFront)
        book.appendChild(bookBack)
        flipContainer.appendChild(book)
        bookstore.appendChild(flipContainer)

    })

    search()
}

function search() {
    var books = Array.from(document.getElementsByClassName("flip-card"))
    console.log(books)
    var searchBar = document.forms['search-books'].querySelector('input')
    searchBar.addEventListener('keyup', function (e) {
        var term = e.target.value.toLowerCase();
        books.forEach(function (book) {
            let tittle = book.outerText
            console.log(tittle)
            if (tittle.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block'
            } else {
                book.style.display = 'none'
            }
        })
    })
}

