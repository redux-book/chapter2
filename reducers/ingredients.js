import { ADD_INGREDIENT, SET_INGREDIENTS } from '../constants/actionTypes';

const ingredientsReducer = (ingredients = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity
      };

      return ingredients.concat(newIngredient);
    
    case SET_INGREDIENTS:
      return action.ingredients;
  }

  return ingredients;
};

export default ingredientsReducer;