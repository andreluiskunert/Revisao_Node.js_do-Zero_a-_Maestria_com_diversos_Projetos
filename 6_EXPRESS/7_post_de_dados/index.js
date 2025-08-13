const express = require("express")
const app = express()
const port = 3000 // pode varear...
const path = require("path")
const { json } = require("stream/consumers")
// ler o body
app.use (
    express.urlencoded({
        extended:true,
    })
)
app.use(express.json())

const basePath = path.join(__dirname, 'templates')
app.get('/users/add', (req, res) =>{
  res.sendFile(`${basePath}/userform.html`)
})
app.post('/users/save',(req, res) =>{
   console.log(req.body)
   const name = req.body.name
   const age = req.body.age
   const profissao = req.body.profissao

   console.log(`O nome do usuário ${name},ele tem ${age},e sua profissão é ${profissao}`)
   
   res.sendFile(`${basePath}/userform.html`)
})

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
