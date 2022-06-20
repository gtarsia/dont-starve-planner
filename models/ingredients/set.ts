  import type { IngredientObject } from './types'

export function setIngredients(name: string, ingredients: IngredientObject) {
  localStorage.setItem(name, JSON.stringify(ingredients))
}
