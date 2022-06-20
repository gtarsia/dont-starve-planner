import { useState, useEffect } from 'react'
import type { Ingredient } from '../models/ingredients'

interface GoalIngredientProps {
  name: string,
  ingredient: Ingredient,
  onDelete: () => void,
  onChangeActive: (active: boolean) => void,
  onChangeAmount: (amount: number) => void,
}

export function GoalIngredient(props: GoalIngredientProps) {
  const [amount, setAmount] = useState(props.ingredient.amount)
  const [active, setActive] = useState(props.ingredient.active)
  useEffect(() => {
    setAmount(props.ingredient.amount)
  }, [props.ingredient.amount])
  useEffect(() => {
    setActive(props.ingredient.active)
  }, [props.ingredient.active])
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
      onChange={e => { props.onChangeActive(!active) }}
    />
  </div>
}
