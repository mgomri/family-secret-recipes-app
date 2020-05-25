const express = require('express');
const Recipes = require('../config/recipe-config');
function validateRecipeId (req, res, next) {
    const { id } = req.params;
    Recipes.findById(id)
        .then(recipe => {   
            if(recipe){
                res.body = recipe
            }else{
                res.status(400).json({message: "Invalid recipe id"})
            }
        })
        .catch(err => {
            res.status(500).json({message: err});
        });

        next();
        
}

module.exports = validateRecipeId;