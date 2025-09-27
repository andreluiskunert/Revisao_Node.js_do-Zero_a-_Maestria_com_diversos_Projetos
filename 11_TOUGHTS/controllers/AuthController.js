const User = require('../models/User') // modelo Sequelize
const bcrypt = require('bcryptjs')

module.exports = class AuthController {
  static login(req, res) {
    res.render('auth/login')
  }

  static async loginPost(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
      req.flash('message', 'Preencha todos os campos!')
      return res.render('auth/login')
    }
    // Aqui você faria validação real com User.findOne(...)
    req.flash('message', 'Login realizado com sucesso!')
    res.redirect('/')
  }

  static register(req, res) {
    res.render('auth/register')
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body

    // Validação de senha
    if (password !== confirmpassword) {
      req.flash('message', 'As senhas não conferem, tente novamente!')
      return res.render('auth/register')
    }

    // Verificar se usuário já existe
    const userExists = await User.findOne({ where: { email } })
    if (userExists) {
      req.flash('message', 'E-mail já cadastrado!')
      return res.render('auth/register')
    }

    // Criptografar a senha
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    // Criar usuário no banco
    await User.create({ name, email, password: hashedPassword })

    req.flash('message', 'Cadastro realizado com sucesso! Faça login.')
    res.redirect('/login')
  }
}
