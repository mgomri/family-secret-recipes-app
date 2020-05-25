const knex = require('knex');
const knexConfig = require('../knexfile');
const database = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    findByRecipe,
    add,
    remove,
    update
};

function find(){
    return database('instructions');
};

function findById(instruction_number){
    return database('instructions')
           .where({ instruction_number })
           .first();
};

function findByRecipe(recipeId){
    return database('instructions as i')
        .join('recipes as r', 'i.recipe_id', 'r.recipe_id')
        .select('i.recipe_id', 'i.instruction_number', 'i.instruction')
        .where('r.recipe_id', recipeId);
};

async function add(instruction){
    try{
        const[id] = await database('instructions')
                        .insert(instruction, 'id');
        return findById(id);
    }catch(err){
        throw err;
    }
};

function remove(instruction_number){
    return database('instructions')
            .where('instruction_number', Number(instruction_number))
            .del();
};

function update(instruction_number, changes){
    return database('instructions')
            .where('instruction_number', Number(instruction_number))
            .update(changes);
}