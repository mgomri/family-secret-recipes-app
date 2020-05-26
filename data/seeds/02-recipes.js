exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
       {
         user_id: 1,
         title: 'Keto Mushroom-Stuffed Chicken Breasts',
         source:'mom',
         category:'chicken',
         recipeImage:'usodfpsjdfsdf'
       },

       {
        user_id: 2,
        title: 'Heirloom Blueberry Cake',
        source:'my pet rat',
        category:'Desserts',
        recipeImage:'abcdefgh'
      },
      ]);
    });
};
