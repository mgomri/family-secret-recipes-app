const express = require ('express');
const server = express();
const cors = require('cors');
const helmet = require ('helmet');
const recipeRouter = require('../routes/recipe-router');
const userRouter = require('../routes/user-router');
const ingredientRouter = require('../routes/ingredient-router');
const instructionRouter = require('../routes/instruction-router');
const authenticator = require('../middleware/authenticator');

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/recipes', authenticator, recipeRouter);
server.use('/users', userRouter);
server.use('/ingredients', ingredientRouter);
server.use('/instructions', instructionRouter);


server.get('/', (req, res) => {
    res.send({ api : 'Welcome to Family Cook Book Api'});
});

module.exports = server;