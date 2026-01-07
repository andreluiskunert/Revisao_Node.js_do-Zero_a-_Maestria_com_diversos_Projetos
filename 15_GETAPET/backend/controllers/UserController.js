const User = require('../models/User')
  const bcrypt = require('bcrypt')
  const createUserToken = require('../helpers/create-user-token')
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
    // De noite_sábado,03/01/2026
    // create a password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    // Create a user
    const user = new User ({
      name,
      email,
      phone,
      password: passwordHash,
    })
    try{
      const newUser = await user.save()
     await createUserToken(newUser, req, res)
    } catch(error){
      res.status(500).json({message: error})
    }
  }
  // Terça-feira, 06/01/2026_de noite
  static async login(req, res) {
    const {email, password} = req.body
     if (!email) {
      res.status(422).json({ message: 'O Email é obrigatório:' })
      return
    }
     if (!password) {
      res.status(422).json({ message: 'A Senha é obrigatória:' })
      return
    }

    // check if user exists
    const user = await User.findOne({ email: email })

    if (!user) {
      return res
        .status(422)
        .json({ message: 'Não há usuário cadastrado com este e-mail!' })
    }

    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
      return res.status(422).json({ message: 'Senha inválida' })
    }

    await createUserToken(user, req, res)
  }

  static async checkUser(req, res) {
    let currentUser

    console.log(req.headers.authorization)

    if (req.headers.authorization) {
      const token = getToken(req)
      const decoded = jwt.verify(token, 'nossosecret')

      currentUser = await User.findById(decoded.id)

      currentUser.password = undefined
    } else {
      currentUser = null
    }

    res.status(200).send(currentUser)
  }

  static async getUserById(req, res) {
    const id = req.params.id

    const user = await User.findById(id)

    if (!user) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json({ user })
  }

  static async editUser(req, res) {
    const token = getToken(req)

    //console.log(token);

    const user = await getUserByToken(token)

    // console.log(user);
    // console.log(req.body)
    // console.log(req.file.filename)

    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword

    let image = ''

    if (req.file) {
      image = req.file.filename
    }
  }
  
}
