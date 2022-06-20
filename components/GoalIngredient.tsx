import { useState, useEffect } from 'react'

interface GoalIngredientProps {
  name: string,
  amount: number,
  onDelete: () => void,
  onChangeAmount: (amount: number) => void,
}

export function GoalIngredient(props: GoalIngredientProps) {
  const [amount, setAmount] = useState(props.amount)
  useEffect(() => {
    setAmount(props.amount)
  }, [props.amount])
  return <div>
    <button onClick={props.onDelete}>X</button>
    <span style={{ display: 'inline-block', width: '100px' }}>{props.name}</span>
    <input
      type="number"
      value={amount}
      onChange={e => props.onChangeAmount(parseInt(e.target.value))}
      style={{ width: '100px' }}
    />
  </div>
}
