const router = require('express').Router();
const Users = require('../config/user-config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const generateToken = (user) => {
    const payload = {
      subject: user.id,
      username: user.username
    };
    const secret = 'cruk8xsbrx7uyb30e7pf3yyiv1h9ibc5b3rfbx0n';
    const options = {
      expiresIn: '24h'
    };
    return jwt.sign(payload, secret, options);
  };
  
  
  router.get('/', (req, res) => {
      Users.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ message:'Unable to retrieve the users'});
        });
  });

 
  router.post('/register', (req, res) => {
    const credentials = req.body;
    credentials.password = bcrypt.hashSync(credentials.password, 12);
  
    Users.add(credentials)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to register the user'})
      });
  });

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    
    Users.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                res.status(200).json({ 
                    message: `welcome ${user.username}`, 
                   token
                });
            }else{
                res.status(401).json({ message: 'Invalid Credentials'})
            };
        })
        .catch(err => {
            res.status(500).json({message: error});
        });
});

module.exports = router;



