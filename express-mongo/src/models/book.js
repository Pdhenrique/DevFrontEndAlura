import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  pages: { type: Number },
  price: { type: Number },
}, { versionKey: false })

const books = mongoose.model("Library", bookSchema)

export default books