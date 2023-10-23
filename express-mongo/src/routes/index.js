import express from 'express'
import books from './bookRoutes'

const routes = (App) => {
  App.routes("/").get((req,res) => res.status(200).send("Teste"))

  App.use(express.json(), books)
}

export default routes