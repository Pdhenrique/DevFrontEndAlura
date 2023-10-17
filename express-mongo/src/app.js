import express from 'express'

const App = express()
App.use(express.json())

const books = [
  {
    id: 1,
    title: 'Senhor dos Anéis'
  },
  {
    id: 2,
    title: 'Harry Potter'
  }
]

function searchBook(id){
  return books.findIndex(book => {
    return book.id === Number(id)
  })
}

App.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js")
})

App.get("/books", (req, res) => {
  res.status(200).json(books)
})

App.get("/books/:id", (req, res) => {
  const index = searchBook(req.params.id)

  res.status(200).json(books[index])
})

App.post('/books', (req,res) =>{
  books.push(req.body)
  res.status(201).send("Livro cadastrado")
} )

App.put("/books/:id", (req, res) => {
  const index = searchBook(req.params.id)
  books[index].title = req.body.title

  res.status(200).json(books)
})

App.delete("/books/:id", (req, res) => {
const index = searchBook(req.params.id)
books.splice(index, 1)

res.status(200).send("Livro removido")

})

export default App