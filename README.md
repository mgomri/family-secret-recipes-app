# Family recipe cook book API

## Description:

This Document provides a description of how to access the Api's resources.

Endpoints:

base url: https://secret-family-recipe-app.herokuapp.com

***Authorization***

- /users/register      Register a new user
- /users/login         Login

***Recipes***

- /recipes                      Create a new recipe/list all recipes
               
- /recipes/:id                  Request/Delete/update a recipe with a specific id    

- /recipes/users/:user_id       Request all recipes from the user with user_id                 
- /recipe/:id/ingredients               List all ingredients for a recipe with id. 

- /recipe/:id/instructions              List all instrctions for a recipe with a specific id



***Ingredients***         
                                   
- /ingredients                      Add a new ingredient/list all ingredients
               
- /ingredients/:id                  Request/Delete/Update a ingredient with a specific  recipe_id  

***instructions***         
                                   
- /instructions                      Add a new instruction/list all instructions
               
- /instructions/:id                  Request/Delete/Update a instruction with a specific recipe_id    
                
                     

***Seed Data***

user1:

    - username:ironChef
    - password:hello123


user2:

    - username:boyardee
    - password:password123



