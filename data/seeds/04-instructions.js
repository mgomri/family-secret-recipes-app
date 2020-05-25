exports.seed = function(knex) {
  return knex('instructions').truncate()
    .then(function () {
      return knex('instructions').insert([
        {recipe_id: 1, instruction:'Preheat the oven to 400 degrees F (200 degrees C). Set an oven rack in the center of the oven.'},
        {recipe_id: 1, instruction:'Place chicken breasts between 2 sheets of heavy plastic on a solid, level surface. Firmly pound with the smooth side of a meat mallet to 1/2-inch thickness.'},
        {recipe_id: 1, instruction:'Melt butter in a saucepan over medium heat. Add mushrooms and cook until softened, about 4 minutes. Add garlic and thyme and cook until mushrooms are tender and most of the liquid has evaporated, 4 to 5 minutes. Reduce heat to medium-low. Stir in cream cheese and season with salt. Cook and stir until cream cheese has completely melted. Remove from heat.'},
        {recipe_id: 1, instruction:'Spoon mushroom-cream mixture onto the chicken breasts. Wrap chicken around the mixture and secure with toothpicks. Set chicken bundles, seam-side up, in a baking dish.'},
        {recipe_id: 1, instruction:'Bake in the preheated oven for 20 minutes. Remove from oven and brush with Dijon mustard. Sprinkle with Parmesan cheese and return to the oven.'},
        {recipe_id: 1, instruction:'Continue baking until no longer pink in the center and the juices run clear, 15 to 20 minutes more. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Discard toothpicks before serving.'},
        {recipe_id: 2, instruction: 'Preheat oven to 350 degrees F (175 degrees C). Grease a 9x13-inch baking dish.'},
        {recipe_id: 2, instruction: 'Preheat oven to 350 degrees F (175 degrees C). Grease a 9x13-inch baking dish.'},
        {recipe_id: 2, instruction:'Mix sugar, vegetable oil, eggs, salt, cinnamon, buttermilk, flour, baking powder, and blueberries, stirring after each addition, in a large bowl. Pour batter into prepared baking dish.'},
        {recipe_id: 2, instruction: 'Bake in the preheated oven until a toothpick inserted in the center comes out clean, 35 to 45 minutes.'}
      ]);
    });
};
