import express from 'express'
import connectDataBase from './config/dbConnect.js'
import books from './models/book.js'

const connection = await connectDataBase()

connection.on("error", (error) => {
  console.error("Connection error", error)
} )

connection.once("open", () => {
  console.log("Connection successfully")
})

const App = express()
App.use(express.json())


App.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js")
})

App.get("/books", async (req, res) => {
  const findBooks = await books.find({})
  res.status(200).json(findBooks)
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

