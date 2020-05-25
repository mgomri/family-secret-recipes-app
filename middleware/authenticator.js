const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  
  const token = req.headers.authorization;
  if (token) {
    const secret = process.env.JWT_SECRET || 'cruk8xsbrx7uyb30e7pf3yyiv1h9ibc5b3rfbx0n';

    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: "you are not authorized" });
      } else {
        req.jwt = decodedToken;
        next();
      };
    });
  } else {
    res.status(400).json({ message: "Please provide the authentication information" });
  }
};