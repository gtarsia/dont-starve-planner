import type { IngredientsObject } from './types'

export function setIngredients(name: string, ingredients: IngredientsObject) {
  localStorage.setItem(name, JSON.stringify(ingredients))
}
