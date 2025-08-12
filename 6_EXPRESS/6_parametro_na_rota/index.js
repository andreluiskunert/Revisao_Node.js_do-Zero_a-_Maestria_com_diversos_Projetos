const express = require("express")
const app = express()
const port = 3000 // pode varear...
const path = require("path")

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    // Leitura da tabela 
    console.log(`Estamos buscando por novo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})
app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})
app.listen(port, ()=>{
    console.log(`App roda na porta${port}`)
})