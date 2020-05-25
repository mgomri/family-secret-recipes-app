
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {recipe_id: 1, ingredient:'1 (8 ounce) package baby portabella mushrooms, sliced'},
        {recipe_id: 1, ingredient:'2 cloves garlic, minced'},
        {recipe_id: 1, ingredient:'½ teaspoon thyme'},
        {recipe_id: 1, ingredient:'1 (8 ounce) package cream cheese'},
        {recipe_id: 1, ingredient:'¼ teaspoon salt'},
        {recipe_id: 1, ingredient:'1 (8 ounce) package baby portabella mushrooms, sliced'},
        {recipe_id: 1, ingredient:'toothpicks'},
        {recipe_id: 1, ingredient:'2 tablespoons Dijon mustard'},
        {recipe_id: 1, ingredient:'2 tablespoons grated Parmesan cheese, or as needed'},

        {recipe_id: 2, ingredient:'2 cups white sugar'},
        {recipe_id: 2, ingredient:'2 ½ cup vegetable oil'},
        {recipe_id: 2, ingredient:'2 eggs'},
        {recipe_id: 2, ingredient:'½ teaspoon salt'},
        {recipe_id: 2, ingredient:'1 teaspoon ground cinnamon'},
        {recipe_id: 2, ingredient:'1 cup buttermilk'},
        {recipe_id: 2, ingredient:'3 cups all-purpose flour'},
        {recipe_id: 2, ingredient:'1 tablespoon baking powder'},
        {recipe_id: 2, ingredient:'2 cups blueberries'}
        
      ]);
    });
};
