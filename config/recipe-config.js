const knex = require('knex');
const knexConfig = require('../knexfile');
const database = knex(knexConfig.development);


module.exports = {
    find,
    findBy,
    findById,
    add,
    remove,
    update
};



function find(){
    return database('recipes');
};

function findBy(filter){
    return database('recipes')
           .where(filter);
};

function findById(recipe_id){
    return database('recipes')
           .where({ recipe_id })
           .first();
};

async function add(recipe){
    try{
        const[id] = await database('recipes')
                        .insert(recipe, 'id');
        return findById(id);
    }catch(err){
        throw err;
    }
};

function remove(recipe_id){
    return database('recipes')
            .where('recipe_id', Number(recipe_id))
            .del();
};

function update(recipe_id, changes){
    return database('recipes')
            .where('recipe_id', Number(recipe_id))
            .update(changes);
}