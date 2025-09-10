const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const flash = require('express-flash')
const app = express()

const conn = require('./db/conn')
// 2ª parte de estruturação
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
conn
  .sync()
  .then(() =>{
    app.listen(3000)
  })
  .catch((err) => console.log(err))