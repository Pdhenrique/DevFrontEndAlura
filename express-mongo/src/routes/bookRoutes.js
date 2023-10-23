import express from "express"
import BookController from "../controllers/bookController"

const routes = express.Router()

routes.get("/books", BookController.ListBooks)

export default routes