module.exports = class AuthController {
  static login(req, res) {
    res.render("auth/login");
  }

  static loginPost(req, res) {
    // aqui vai a lógica de login
    res.send("Login realizado!");
  }

  static register(req, res) {
    res.render("auth/register");
  }

  static registerPost(req, res) {
    // aqui vai a lógica de cadastro
    res.send("Usuário registrado!");
  }

  static logout(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }
};
