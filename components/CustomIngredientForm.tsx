import { useState } from 'react'

interface IngredientFormProps {
  onIngredientAdd: (ingredient: { name: string, amount: number }) => void;
}

export function CustomIngredientForm(props: IngredientFormProps) {
  const [name, setName] = useState<string>('')
  const [amount, setAmount] = useState(1)
  return <div>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    <input value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}/>
    <button onClick={() => props.onIngredientAdd({ name, amount }) }>
      Add custom ingredient
    </button>
  </div>
}
