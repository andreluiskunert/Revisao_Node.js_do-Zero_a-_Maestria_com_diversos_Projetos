// // Revisão de error pra correção de código_quinta-feira,15/01/2026_de noite
// const User = require('../models/User')

// module.exports = class UserController {

//   static async register(req, res) {

//     const {name, email, phone, password, confirmpassword} = req.body
// // domingo_18/01/2026_de noite
//    if(!name){
//     res.status(422).json({message: 'O nome é obrigatório:'})
//     return
//    }

//   }
// }


const User = require('../models/User')

module.exports = class UserController {

  static async register(req, res) {

    if (!req.body) {
      return res.status(400).json({ message: 'Dados não enviados no body' })
    }

    const { name, email, phone, password, confirmpassword } = req.body

    if (!name) {
      return res.status(422).json({ message: 'O nome é obrigatório' })
    }

    res.status(201).json({ message: 'Usuário válido para cadastro' })
  }
}
