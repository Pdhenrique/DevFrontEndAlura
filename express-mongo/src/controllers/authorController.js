import { author } from '../models/author.js'

class AuthorController { 

  static async ListAuthor (req, res){
    try{
      const findAuthor = await author.find({})
      res.status(200).json(findAuthor)
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição`})
    } 
  }
  static async ListAuthorById (req, res){
    try{
      const id = req.params.id
      const resAuthor = await author.findById(id)
      res.status(200).json(resAuthor)
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição do autor`})
    } 
  }

  static async UpdateAuthor (req, res){
    try{
      const id = req.params.id
      await author.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: "autor atualizado"})
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha na requisição do autor`})
    } 
  }

  static async RegisterAuthor (req, res) {
    try{
      const newAuthor = await author.create(req.body)
      res.status(201).json({ 
        message: "Cadastrado com sucesso", 
        author: newAuthor 
      })
    }catch (erro) {
      res.status(500).json({message: `${erro.message} - falha ao cadastrar autor`})
    }
  }

  static async DeleteAuthor (req, res) {
    try{ 
      const id = req.params.id
      await author.findByIdAndDelete(id)
      res.status(200).json({message: "Author excluido"})
    } catch (erro){
      res.status(500).json({message: `${erro.message} - falha ao excluir`})
    }
  }
}


export default AuthorController