
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'ironChef', password:'food4life', email:'irochf@testmail.com'},
        {username:'boyardee', password:'cookitup', email:'boya@testmail.com'}
        
      ]);
    });
};
