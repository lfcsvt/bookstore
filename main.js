function getData() {
    fetch('https://api.myjson.com/bins/udbm5')
        .then(response => response.json())
        .then(response => {
            const books = response.books
            main(books)
        })
}
window.onload = () => getData()

function main(books) {
    createBooks(books)
    console.log(books)
  
}

function createBooks(books){
    var bookstore = document.getElementById('bookstore')

    books.forEach(book => {
        book
        var tittleText = book.titulo
        var imageContent = book.portada
        var backImageContent = book.detalle
        var description = book.descripcion
        var flipContainer = document.createElement('div')
       flipContainer.setAttribute('id', 'flip-container')
       flipContainer.setAttribute('class', 'flip-container')
        var book = document.createElement('div')
        book.setAttribute('id', 'one-book')
        book.setAttribute('class', 'flipper')
        var tittle = document.createElement('p')
        var image = document.createElement('img')
        image.setAttribute("style", "height: 300; width: 300px")
        image.setAttribute('src', imageContent)
        var bookFront = document.createElement('div')
        bookFront.setAttribute('id', 'front')
        bookFront.setAttribute('class', 'book-front')
        var backImage = document.createElement('img')
        backImage.setAttribute("style", "height: 300; width: 300px")
        var bookBack = document.createElement('div')
        var bookDescript = document.createElement('p')
        bookBack.setAttribute('id', 'book-back')
        bookBack.setAttribute('class', 'back')
        backImage.setAttribute('src', backImageContent)
        tittle.innerHTML = tittleText
        bookDescript.innerHTML = description
        bookFront.appendChild(tittle)
        bookBack.appendChild(bookDescript)
        bookFront.appendChild(image)
        bookBack.appendChild(backImage)
        book.appendChild(bookFront)
        book.appendChild(bookBack)
        flipContainer.appendChild(book)
        bookstore.appendChild(flipContainer)
        
    })
}


