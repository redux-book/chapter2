import { ADD_INGREDIENT, SET_INGREDIENTS } from '../constants/actionTypes';

export const addIngredient = (recipe, name, quantity) => ({
  type: ADD_INGREDIENT, recipe, name, quantity
});

export const setIngredients = (ingredients) => ({
  type: SET_INGREDIENTS, ingredients
});