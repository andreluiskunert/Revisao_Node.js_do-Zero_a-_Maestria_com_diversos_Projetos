// Segunda-feira, 05/01/2026
// Revisão_Terça-feira,20/01/2026
const jwt = require("jsonwebtoken")
const createUserToken = async(user, req, res) => {

  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      id: user._id,
    },
    "nossosecret"
  );

  // return token
  res.status(200).json({
    message: "Você está autenticado!",
    token: token,
    userId: user._id,
  });
};

module.exports = createUserToken;