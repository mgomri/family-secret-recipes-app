
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'ironChef', password:'$2a$12$NfJrJwukmnnZLt0MqU.sxuCaJQijfqT1KjZjTjqtqhOAsh42PtY1i', email:'irochf@testmail.com'},
        {username:'boyardee', password:'$2a$12$FuzO5zzV3zYr0DEhy74ROe6UI6lN2P2JMOFe3rWR4CMplJ1YP6sMi', email:'boya@testmail.com'}
        
      ]);
    });
};
