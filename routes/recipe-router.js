const router = require('express').Router();
const Recipes = require('../config/recipe-config');
const validateRecipeId = require('../middleware/validateRecipeId');
const Ingredients = require('../config/ingredient-config');
const Instructions = require('../config/instruction-config');

router.get('/', (req, res) => {
    Recipes.find()
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({
            message:'Unable to retrieve recipes'
        });
    })
});

router.get('/:id', validateRecipeId, (req, res) => {
    const { id } = req.params;
    Recipes.findById(id)
        .then(recipe => {
                res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: err})
        })
});

router.post('/', (req, res) => {
    const newRecipe = req.body;
    Recipes.add(newRecipe)
    .then(recipe => {
        res.status(201).json({Added: recipe})
    })
    .catch(err => {
        res.status(500).json({message: 'Unable to add recipe'})
    })
});

router.put('/:id', validateRecipeId, (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Recipes.update(id, changes)
    .then(recipe => {
        res.status(200).json({ Updated: res.body})
    })
    .catch(err => {
        res.status(500).json({ message: 'Unable to update the recipe with the specified id'})
    })
});

router.delete('/:id', validateRecipeId, (req, res) => {
    const { id } = req.params;
    Recipes.remove(id)
    .then(recipe => {
        res.status(200).json({Deleted: res.body})
    })
    .catch(err => {
        res.status(500).json({ message: 'Unable to delete the recipe with the specified id'})
    })
});

//get recipe's ingredients
router.get('/:id/ingredients', (req, res) => {
    Ingredients.findByRecipe(req.params.id)
        .then(ing => {
            res.status(200).json(ing)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/:id/instructions', (req, res) => {
    Instructions.findByRecipe(req.params.id)
        .then(ing => {
            res.status(200).json(ing)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;