import books from '../models/book.js'

class BookController { 

  static async ListBooks (req, res){
    try{
      const findBooks = await books.find({})
      res.status(200).json(findBooks)
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição`})
    } 
  }

  static async RegisterBook (req, res) {
    try{
      const newBook = await books.create(req,body)
      res.status(201).json({ 
        message: "Cadastrado com sucesso", 
        book: newBook 
      })
    }catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
    }
  }
}


export default BookController