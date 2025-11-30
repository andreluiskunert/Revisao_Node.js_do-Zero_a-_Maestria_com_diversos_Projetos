const User = require('../models/User')
module.exports = class UserController {
  static async register(req, res) {
    // const name = req.body.name
    // const email = req.body.email
    // const phone = req.body.phone
    // const password = req.body.password
    // const confirmpassword = req.body.confirmpassword
    const { name, email, phone, password, confirmpassword } = req.body
    // Amanhã após do culto...
  }
}