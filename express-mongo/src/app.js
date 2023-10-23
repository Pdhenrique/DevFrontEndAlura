import express from 'express'
import connectDataBase from './config/dbConnect.js'
import routes from './routes/index.js'

const connection = await connectDataBase()

connection.on("error", (error) => {
  console.error("Connection error", error)
} )

connection.once("open", () => {
  console.log("Connection successfully")
})

const App = express()

routes(App)

App.get("/books/:id", (req, res) => {
  const index = searchBook(req.params.id)

  res.status(200).json(books[index])
})

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

