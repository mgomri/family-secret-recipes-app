                                        Family recipe cook book API

Description:

This Document provides a description of how to access the Api's resources.

Endpoints:

base url: https://secret-family-recipe-app.herokuapp.com


Resources       Endpoint                         CRUD                     description

recipes         /recipes                         post              Create a new recipe.
                /recipes                         get               List all available recipes.
                /recipes/:id                     get               Request a recipe with a specific id.    
                /recipe/:id                      delete            Delete a recipe with a specific id.     
                /recipe/:id                      put               Update a recipe with a specific id.
                /recipe/:id/ingredients          get               List all ingredients for a recipe with id. 
                /recipe/:id/instructions         get               List all instrctions                     
            
                                   



