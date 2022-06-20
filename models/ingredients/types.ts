
export type IngredientsAmount = Record<string, number>

export interface Ingredient {
  amount: number;
  active: boolean;
}
export type IngredientsObject = Record<string, Ingredient>
