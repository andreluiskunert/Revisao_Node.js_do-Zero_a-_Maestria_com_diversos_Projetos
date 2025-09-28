const User = require('../models/User')
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
    req.flash('message', 'Login realizado com sucesso!')
    res.redirect('/')
  }

  static register(req, res) {
    res.render('auth/register')
  }
 static async registerPost(req, res){
    const {name, email, password, confirmpassword} = req.body
    // Validação de senha
    if(password != confirmpassword){
      req.flash('message', 'As senhas estão erradas')
      res.render('auth/register')

      return
    }
   }
}
