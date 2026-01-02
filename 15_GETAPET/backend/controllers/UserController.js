const User = require('../models/User')
module.exports = class UserController {
  static async register(req, res) {
    //  res.json('Olá Get a Pet') show funcionou
    // const name = req.body.name
    // const email = req.body.email
    // const phone = req.body.phone
    // const password = req.body.password
    // const confirmpassword = req.body.confirmpassword
    const { name, email, phone, password, confirmpassword } = req.body
    // validações:
    if (!name) {
      res.status(422).json({ message: 'O nome é obrigatório:' })
      return
    }
    if (!email) {
      res.status(422).json({ message: 'O Email é obrigatório:' })
      return
    }
    if (!phone) {
      res.status(422).json({ message: 'O Telefone é obrigatório:' })
      return
    }
    if (!password) {
      res.status(422).json({ message: 'A Senha é obrigatória:' })
      return
    }
    if (!confirmpassword) {
      res.status(422).json({ message: 'A Confirmação da Senha é obrigatória:' })
      return
    }
    if (password !== confirmpassword) {
      res.status(422).json({ message: 'A Senha e a confirmação da Senha  devem ser iguais:' })
      return
    }
    // check if user exists
    const userExists = await User.findOne({ email: email })
    if (userExists) {
      res.status(422).json({ message: 'Por favor usei outro  Email :' })
      return
    }
    // De noite
  }
}
