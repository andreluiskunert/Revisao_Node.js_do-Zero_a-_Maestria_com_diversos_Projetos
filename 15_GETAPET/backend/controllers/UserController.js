// Revisão de error pra correção de código_quinta-feira,15/01/2026_de noite
const User = require('../models/User')
module.exports = class UserController {
    static async register(req, res){
       const {name, email, phone, password, confirmpassword} = req.body
       if(!name){
        res.status(422).json({message: 'O nome é obrigatório:'})
        return
        // revisão amanhã...
       }
    }
    
  }

