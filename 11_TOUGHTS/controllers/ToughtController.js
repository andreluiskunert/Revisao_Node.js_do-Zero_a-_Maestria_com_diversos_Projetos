const Tought = require('../models/Tought');
const User = require('../models/User');

module.exports = class ToughtController {
  static async dashboard(req, res) {
    const userId = req.session.userid;

    if (!userId) {
      res.redirect('/login');
      return;
    }

    try {
      const user = await User.findOne({
        where: { id: userId },
        include: Tought,
        plain: true,
      });

      if (!user) {
        res.redirect('/login');
        return;
      }

      const toughts = user.Toughts.map(result => result.dataValues);
      res.render('toughts/dashboard', { toughts });
    } catch (error) {
      console.log(error);
    }
  }

  static async showToughts(req, res) {
    const toughts = await Tought.findAll({ raw: true });
    res.render('toughts/home', { toughts });
  }

  // ✅ Adicione estas funções para evitar o erro
  static createTought(req, res) {
    res.render('toughts/create');
  }

  static async createToughtSave(req, res) {
    console.log('Salvando pensamento (exemplo)');
    res.redirect('/toughts/dashboard');
  }

  static async removeTought(req, res) {
    console.log('Removendo pensamento (exemplo)');
    res.redirect('/toughts/dashboard');
  }
};
