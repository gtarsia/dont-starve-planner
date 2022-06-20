import type { IngredientObject } from './types'

export function addIngredients(
  mutated: IngredientObject,
  addition: IngredientObject,
) {
  Object.entries(addition).map(([name, amount]) => {
    if (mutated[name] == null) {
      mutated[name] = amount
    } else {
      mutated[name] += amount
    }
  })
}
