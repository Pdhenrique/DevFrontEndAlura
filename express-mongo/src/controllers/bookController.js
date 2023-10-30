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
  static async ListBookById (req, res){
    try{
      const id = req.params.id
      const resBook = await books.findById(id)
      res.status(200).json(resBook)
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição do livro`})
    } 
  }

  static async UpdateBook (req, res){
    try{
      const id = req.params.id
      await books.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: "livro atualizado"})
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição do livro`})
    } 
  }

  static async RegisterBook (req, res) {
    try{
      const newBook = await books.create(req.body)
      res.status(201).json({ 
        message: "Cadastrado com sucesso", 
        book: newBook 
      })
    }catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
    }
  }

  static async DeleteBook (req, res) {
    try{ 
      const id = req.params.id
      await books.findByIdAndDelete(id)
      res.status(200).json({message: "livro excluido"})
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha ao excluir`})
    }
  }
}


export default BookController