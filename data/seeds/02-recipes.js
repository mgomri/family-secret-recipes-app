exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
       {
         user_id: 1,
         title: 'Keto Mushroom-Stuffed Chicken Breasts',
         source:'mom',
         category:'chicken',
         recipeImage:'uploads/2020-05-26T16:32:15.694Zketo.jpg'
       },

       {
        user_id: 2,
        title: 'Heirloom Blueberry Cake',
        source:'my pet rat',
        category:'Desserts',
        recipeImage:'uploads/2020-05-26T16:33:50.857Zblueberry.jpg'
      },
      ]);
    });
};
