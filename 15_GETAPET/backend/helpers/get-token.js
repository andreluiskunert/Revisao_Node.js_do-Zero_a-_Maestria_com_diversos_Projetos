// Sexta-feira,09/01/2026
// get token from headers
// Obs.: 
//  13/01/2026-> instalando Postman e congigurando fui o obrigado a formatar meu not...depois fiz um git clone no projeto do github...
const getToken = (req) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  return token;
};

module.exports = getToken;