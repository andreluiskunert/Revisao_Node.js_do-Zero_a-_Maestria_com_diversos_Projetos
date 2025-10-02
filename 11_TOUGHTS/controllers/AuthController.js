const User = require('../models/User')

module.exports = class AuthController {
  static login(req, res) {
    res.render('auth/login')
  }

  static async loginPost(req, res) {
    const { email, password } = req.body

    // Aqui você valida o usuário
    const user = await User.findOne({ where: { email: email } })

    if (!user) {
      req.flash('message', 'Usuário não encontrado!')
      return res.redirect('/login')
    }

    // (se tiver bcrypt compare a senha, senão só compara direto)
    if (user.password !== password) {
      req.flash('message', 'Senha inválida!')
      return res.redirect('/login')
    }

    // 🔹 Aqui salvamos a sessão
    req.session.userid = user.id

    req.flash('message', 'Login realizado com sucesso!')
    req.session.save(() => {
      res.redirect('/toughts/dashboard')
    })
  }

  static register(req, res) {
    res.render('auth/register')
  }

  static async registerPost(req, res) {
    // lógica de cadastro...
  }

  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/')
    })
  }
}
