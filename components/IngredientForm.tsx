import data from '../data/recipes.json'
import { useState } from 'react'

const recipes = Object.entries(data)

interface IngredientFormProps {
  onIngredientAdd: (ingredient: { name: string, amount: number }) => void;
}

export function IngredientForm(props: IngredientFormProps) {
  const [ingredient, setIngredient] = useState<string>(recipes[0][0])
  const [amount, setAmount] = useState(1)
  return <div>
    <select onChange={(e) => setIngredient(e.target.value)}>
      {recipes.map(([name, recipe]) => <option value={name} key={name}>
        {name}
      </option>)}
    </select>
    <input value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}/>
    <button onClick={() => props.onIngredientAdd({ name: ingredient, amount }) }>
      Add ingredient
    </button>
  </div>
}
