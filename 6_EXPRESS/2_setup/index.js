const express = require("express")
const app = express()
const port = 3000 // pode varear...

app.get('/', (req, res)=>{
    res.send('Estamos Conectados....')
})
app.listen(port, ()=>{
    console.log(`App roda na porta${port}`)
})