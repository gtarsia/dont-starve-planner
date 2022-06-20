import { recipesObject } from '../../data'
import type { IngredientsAmount } from './types'
import { addIngredients } from './add'

export function breakdownIngredient(
  name: string,
  amount: number,
  state: IngredientsAmount = {},
) {
  const recipe = recipesObject[name]
  if (recipe) {
    recipe.ingredients.forEach(ing => {
      const [ingName, ingAmount] = ing
      breakdownIngredient(ingName, ingAmount * amount, state)
    })
  } else {
    addIngredients(state, { [name]: amount })
  }
  return state
}
