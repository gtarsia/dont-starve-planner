import type { IngredientObject } from './types'

export function getIngredients(name: string): IngredientObject {
  return JSON.parse(window.localStorage.getItem(name) || '{}')
}
