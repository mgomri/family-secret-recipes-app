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
    return database('users');
};

function findBy(filter){
    return database('users')
           .where(filter);
};

function findById(user_id){
    return database('users')
           .where({ user_id })
           .first();
};

function findById(user_id){
    return database('users')
           .where({ user_id })
           .first();
}

async function add(user){
    try{
        const[id] = await database('users')
                        .insert(user, 'id');
        return findById(id);
    }catch(err){
        throw err;
    }
};

function remove(user_id){
    return database('users')
            .where('user_id', Number(user_id))
            .del();
};

function update(user_id, changes){
    return database('users')
            .where('user_id', Number(user_id))
            .update(changes);
}