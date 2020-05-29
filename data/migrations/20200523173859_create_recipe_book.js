
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
        tbl.increments('user_id');
        tbl.string('username', 128)
           .unique()
           .notNullable();
        tbl.string('password', 128)
           .notNullable();
        tbl.string('email', 255)
           .notNullable()
           .unique();
  })
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.integer('user_id')
         .unsigned()
         .notNullable()
         .references('user_id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
      tbl.string('title', 128)
         .notNullable()
         .unique();
      tbl.string('source', 128)
         .notNullable();
      tbl.text('category')
         .notNullable();
      tbl.string('recipeImage');
             
  })
  .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('recipe_id')
         .inTable('recipes')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
      tbl.string('ingredient')
         .notNullable();
  })
  .createTable('instructions', tbl => {
   tbl.increments('instruction_number');
   tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
   tbl.text('instruction')
      .notNullable();
   })
};

exports.down = function(knex) {
  return knex.schema
            .dropTableIfExists('users')
            .dropTableIfExists('recipes')
            .dropTableIfExists('ingredients')
            .dropTableIfExists('instructions')
};
