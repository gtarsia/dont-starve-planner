import type { IngredientsAmount } from './types'

export function addIngredients(
  mutated: IngredientsAmount,
  addition: IngredientsAmount,
) {
  Object.entries(addition).map(([name, amount]) => {
    if (mutated[name] == null) {
      mutated[name] = amount
    } else {
      mutated[name] += amount
    }
  })
}
