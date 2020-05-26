const router = require('express').Router();
const Recipes = require('../config/recipe-config');
const validate = require('../middleware/validate');
const Ingredients = require('../config/ingredient-config');
const Instructions = require('../config/instruction-config');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(new Error('only files of type .jpeg or .png are accetped'), false);
    }
     
};

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }, 
    fileFilter: fileFilter
});



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

router.get('/:id', validate.recipeId, (req, res) => {
    const { id } = req.params;
    Recipes.findById(id)
        .then(recipe => {
                res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: err})
        })
});


router.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    Recipes.findByUser(userId)
        .then(recipe => {
            if(recipe){
                res.status(200).json(recipe);
            }else{
                res.status(404).json({ message: 'that user has no recipes'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: err})
        })
});


router.post('/', upload.single('recipeImage'), (req, res) => {
    
    const newRecipe = {
        ...req.body,
        recipeImage:req.file.path
    };
    Recipes.add(newRecipe)
    .then(recipe => {
        res.status(201).json({Added: recipe})
    })
    .catch(err => {
        res.status(500).json({message: 'Unable to add recipe'})
    })
});

router.put('/:id', validate.recipeId, (req, res) => {
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

router.delete('/:id', validate.recipeId, (req, res) => {
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
router.get('/:id/ingredients', validate.recipeId, (req, res) => {
    Ingredients.findByRecipe(req.params.id)
        .then(ing => {
            res.status(200).json(ing)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/:id/instructions', validate.recipeId, (req, res) => {
    Instructions.findByRecipe(req.params.id)
        .then(instruction => {
            res.status(200).json(instruction)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;