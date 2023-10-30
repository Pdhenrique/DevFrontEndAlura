import express from "express"
import AuthorController from "../controllers/authorController.js"

const routes = express.Router()

routes.get("/books", AuthorController.ListAuthor)
routes.get("/books/:id", AuthorController.ListAuthorById)
routes.post("/books", AuthorController.RegisterAuthor)
routes.put("/books/:id", AuthorController.UpdateAuthor)
routes.delete("/books/:id", AuthorController.DeleteAuthor)

export default routes