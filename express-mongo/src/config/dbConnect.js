import mongoose from "mongoose";

async function conectaNaDatabase() {

mongoose.connect('mongodb+srv://pedroschwc:8dXnBRapdr8ekY3a@cluster0.2wg0vok.mongodb.net/?retryWrites=true&w=majority')

return mongoose.connection;

}

export default conectaNaDatabase;
