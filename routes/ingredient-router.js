const router = require('express').Router();
const Ingredients = require('../config/ingredient-config');
const validate = require('../middleware/validate');


router.get('/', (req, res) => {
    Ingredients.find()
        .then(ingredient => {
            res.status(200).json(ingredient);
            
        })
        .catch(err =>  {
            res.status(500).json({message: 'Unable to retrieve data'})
        })
})

//find ingredient by id
router.get('/:id', validate.ingredientId, (req, res) => {
    const { id } = req.params;
    Ingredients.findById(id)
        .then(ingredient => {
                res.status(200).json(ingredient);
        })
        .catch(err => {
            res.status(500).json({ message: err})
        })
});

//add a new ingredient
router.post('/', validate.ingredientBody, (req, res) => {
    const newIngredient = req.body;
    Ingredients.add(newIngredient)
    .then(Ingredient => {
        res.status(201).json({Added: Ingredient})
    })
    .catch(err => {
        res.status(500).json({message: 'Unable to add ingredient'})
    })
});

//update ingredients 
router.put('/:id', validate.ingredientId, (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Ingredients.update(id, changes)
    .then(ingredient => {
        res.status(200).json({ Updated: `ingredient_id  ${id}`})
    })
    .catch(err => {
        res.status(500).json({ message: 'Unable to update the ingredient with the specified id'})
    })
});

//delete ingredient with a given id
router.delete('/:id', validate.ingredientId, (req, res) => {
    const { id } = req.params;
    Ingredients.remove(id)
    .then(ingredient => {
        res.status(200).json({Deleted: `ingredient_id  ${id}`})
    })
    .catch(err => {
        res.status(500).json({ message: 'Unable to delete the ingredient with the specified id'})
    })
})
module.exports = router;