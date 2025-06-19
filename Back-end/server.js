const express = require('express')
const dotenv = require('dotenv')
const {insertItem, deleteItem, getItem, listItems} = require('./controller/itemsController')

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.post('/insert', insertItem)
app.delete('/delete/:title', deleteItem)
app.get('/get/:title', getItem)
app.get('/list', listItems)

app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`)
})