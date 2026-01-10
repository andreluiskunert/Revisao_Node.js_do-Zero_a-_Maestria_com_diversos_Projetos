// Sexta-feira,09/01/2026
// get token from headers
const getToken = (req) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  return token;
};

module.exports = getToken;