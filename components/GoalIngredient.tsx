import { useState, useEffect } from 'react'

interface GoalIngredientProps {
  name: string,
  amount: number,
  onDelete: () => void,
  onChangeActive: (active: boolean) => void,
  onChangeAmount: (amount: number) => void,
}

export function GoalIngredient(props: GoalIngredientProps) {
  const [amount, setAmount] = useState(props.amount)
  const [active, setActive] = useState(true)
  useEffect(() => {
    setAmount(props.amount)
  }, [props.amount])
  return <div>
    <button onClick={props.onDelete}>X</button>
    <span style={{ display: 'inline-block', width: '200px' }}>{props.name}</span>
    <input
      type="number"
      value={amount}
      onChange={e => props.onChangeAmount(parseInt(e.target.value))}
      style={{ width: '140px' }}
    />
    <input
      type="checkbox"
      checked={active}
      onChange={e => { setActive(!active); props.onChangeActive(!active) }}
    />
  </div>
}
