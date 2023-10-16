import express from 'express'

const App = express()

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

App.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js")
})

App.get("/Books", (req, res) => {
  res.status(200).json(books)
})

export default App