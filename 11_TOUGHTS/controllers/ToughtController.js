const Tought = require("../models/Tought");

module.exports = {
  async showToughts(req, res) {
    try {
      const toughts = await Tought.findAll({ raw: true });
      res.render("toughts/home", { toughts }); // caminho correto
    } catch (err) {
      console.error(err);
      res.redirect("/");
    }
  },
};
