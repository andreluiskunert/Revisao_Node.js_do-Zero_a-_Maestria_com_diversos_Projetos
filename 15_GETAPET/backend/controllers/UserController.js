// Revisão de error pra correção de código_quinta-feira,15/01/2026_de noite
const User = require('../models/User')
module.exports = class UserController {
    static async register(req, res){
    //   const name = req.body.name
    //   const email = req.body.email
    //   const phone = req.body.phone
    //   const password = req.body.password
    //   const confirmpassword = req.body.confirmpassword

      const {name , email, phone, password, confirmpassword} = req.body
        // validações de erros
        if(!name) {
            res.status(422).json({message: 'O nome é  obrigatório: '})
            return
        }
        if(!email){
            res.status(422).json({message: 'O email é  obrigatório: '})
            return
        }
        if(!phone){
            res.status(422).json({message: 'O telefone é obrigatório: '})
            return
        }
        if(!password){
            res.status(422).json({message: 'A senha é  obrigatória: '})
            return
        }
        if(!confirmpassword){
            res.status(422).json({message: 'A confirmação de senha  é  obrigatória: '})
            return
        }
    }
}