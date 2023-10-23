import "dotenv/config"
import App from "./src/app.js"

const PORT = 3000

App.listen(PORT, () => {
  console.log(`conectado a porta  ${PORT}`)
})