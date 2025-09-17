const User = require('../models/User')
const bcrycpt = require('bcryptjs')
module.exports = class AuthController{
  static login(req, res){
    res.render('auth/login')
  }
    static register(req, res){
    res.render('auth/register')
  }
  static async registerPost(req, res){
    const { name, email, password, confirmpassword } = req.body
    // password watch validation
    if(password != confirmpassword){
    // Mensagem pra o frontend
     req.flash('message','As snhas são diferentes, tente novamente')
     res.render('/auth/register')
     return
    }
  }
}