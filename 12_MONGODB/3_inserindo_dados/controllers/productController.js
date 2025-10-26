exports.createProductForm = (req, res) => {
  res.render('create') // se estiver usando handlebars ou ejs
}

exports.createProduct = (req, res) => {
  // salvar no banco
  res.send('Produto criado com sucesso!')
}
