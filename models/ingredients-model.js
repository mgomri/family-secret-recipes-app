const knex = require('knex');
const knexConfig = require('../knexfile');
const database = knex(knexConfig.production);

module.exports = {
    find,
    findById,
    findByRecipe,
    add,
    remove,
    update
};

function find(){
    return database('ingredients');
};

function findById(ingredient_id){
    return database('ingredients')
           .where({ ingredient_id })
           .first();
}

function findByRecipe(recipeId){
    return database('ingredients as i')
        .join('recipes as r', 'i.recipe_id', 'r.recipe_id')
        .select('i.recipe_id', 'i.ingredient_id', 'i.ingredient')
        .where('r.recipe_id', recipeId);
}

async function add(ingredient){
    try{
        const[id] = await database('ingredients')
                        .insert(ingredient, 'id');
        return findById(id);
    }catch(err){
        throw err;
    }
};

function remove(ingredient_id){
    return database('ingredients')
            .where('ingredient_id', Number(ingredient_id))
            .del();
};

function update(ingredient_id, changes){
    return database('ingredients')
            .where('ingredient_id', Number(ingredient_id))
            .update(changes);
}