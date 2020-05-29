const express = require ('express');
const server = express();
const cors = require('cors');
const helmet = require ('helmet');
const recipeRouter = require('../routes/recipes-router');
const userRouter = require('../routes/users-router');
const ingredientRouter = require('../routes/ingredients-router');
const instructionRouter = require('../routes/instructions-router');
const authenticator = require('../middleware/authenticator');

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/uploads', express.static('uploads'))
server.use('/recipes', authenticator, recipeRouter);
server.use('/users', userRouter);
server.use('/ingredients', ingredientRouter);
server.use('/instructions', instructionRouter);


server.get('/', (req, res) => {
    const welcomeMessage = process.env.MOTD || 'Family Cook Book Api'
    res.json({ welcomeMessage });
});

module.exports = server;