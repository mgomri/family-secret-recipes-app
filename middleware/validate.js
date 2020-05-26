const express = require('express');
const Recipes = require('../config/recipe-config');
const Ingredients = require('../config/ingredient-config');
const Instructions = require('../config/instruction-config');

function recipeId (req, res, next) {
    const { id } = req.params;
    Recipes.findById(id)
        .then(recipe => {   
            if(recipe){
                res.body = recipe;
                next();
            }else{
                res.status(400).json({message: "Invalid recipe id"})
            }
        })
        .catch(err => {
            res.status(500).json({message: err});
        });       
};

function recipeBody (req, res, next){
    const { user_id, title, source, category } = req.body;

        if(!user_id || !title || !source  || !category || !recipeImage){
            res.status(400).json({ message: 'One or more information fields are missing'})
        }
        else{
            next();
        } 
};

function ingredientBody (req, res, next){
    let { recipe_id, ingredient } = req.body;

        if(!recipe_id || !ingredient){
            res.status(400).json({ message: 'One or more information fields are missing'})
        }
        else{
            next();
        } 
};

function instructionBody (req, res, next){
    let { recipe_id, instruction} = req.body;

        if(!recipe_id || !instruction){
            res.status(400).json({ message: 'One or more information fields are missing'})
        }
        else{
            next();
        } 
};


function ingredientId (req, res, next) {
    const { id } = req.params;
    Ingredients.findById(id)
        .then(ingredient => {   
            if(ingredient){
                res.body = ingredient;
                next();
            }else{
                res.status(400).json({message: "Invalid ingredient id"})
            }
        })
        .catch(err => {
            res.status(500).json({message: err});
        });       
};

function instructionId (req, res, next) {
    const { id } = req.params;
    Instructions.findById(id)
        .then(instruction => {   
            if(instruction){
                res.body = instruction;
                next();
            }else{
                res.status(400).json({message: "Invalid instruction id"})
            }
        })
        .catch(err => {
            res.status(500).json({message: err});
        });       
}

module.exports = {
    recipeId,
    recipeBody,
    ingredientId,
    ingredientBody,
    instructionId,
    instructionBody
    
}