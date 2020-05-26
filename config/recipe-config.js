const knex = require('knex');
const knexConfig = require('../knexfile');
const database = knex(knexConfig.development);


module.exports = {
    find,
    findByUser,
    findById,
    add,
    remove,
    update
};



function find(){
    return database('recipes');
};



function findById(recipe_id){
    return database('recipes')
           .where({ recipe_id })
           .first();
};

function findByUser(user_id){
    return database('recipes')
            .where({ user_id })
            .first();
            
            
}

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