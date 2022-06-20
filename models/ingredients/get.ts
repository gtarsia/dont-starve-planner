import type { IngredientsObject } from './types'

export function getIngredients(name: string): IngredientsObject {
  return JSON.parse(window.localStorage.getItem(name) || '{}')
}
