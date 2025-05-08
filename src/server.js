import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'


const app = express()
const PORT = process.env.PORT || 5000

// get the file path from the URL of the curent module 
const __filename = fileURLToPath(import.meta.url) 

// get the directory name form the file path
const __dirname = dirname(__filename)

// Serves the HTML file from the public directory
// Tells express to serve all files from the public folder as static assets / file. Any requests for the css files will be resolved to the directory

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:5000`)
})