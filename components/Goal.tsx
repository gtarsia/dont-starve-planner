import { useState, useEffect, useMemo } from 'react'
import type { Goal } from '../models/goals'
import { deleteGoal } from '../models/goals'
import type { IngredientsObject } from '../models/ingredients'
import {
  breakdownIngredient,
  setIngredients as _setIngredients,
  getIngredients,
  createIngredient,
} from '../models/ingredients'
import { recipesObject } from '../data'
import { IngredientForm } from './IngredientForm'
import { CustomIngredientForm } from './CustomIngredientForm'
import { GoalIngredient } from './GoalIngredient'

export function GoalComponent(props: { goal: Goal }) {
  const [ingredients, setIngredients] = useState<IngredientsObject>({})
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setIngredients(getIngredients(props.goal.name))
  }, [props.goal.name])
  useEffect(() => {
    setReady(true)
    if (ready) {
      _setIngredients(props.goal.name, ingredients)
    }
  }, [ingredients])
  const ingsArray = useMemo(() => {
    const entries = Object.entries(ingredients)
    entries.sort(([a], [b]) => (a < b ? -1 : a === b ? 0 : 1))
    return entries
  }, [ingredients])
  const total = useMemo(() => {
    const state = {}
    Object.entries(ingredients).forEach(([name, ing]) => {
      if (ing.active === false) {
        return
      }
      breakdownIngredient(name, ing.amount, state)
    })
    return Object.entries(state).sort(([a], [b]) => (a < b ? -1 : a === b ? 0 : 1))
  }, [ingredients])
  return <div>
    <h2>&apos;{props.goal.name}&apos; goal</h2>
    <div>
      <button onClick={() => deleteGoal(props.goal)}>Delete</button>
    </div>
    <IngredientForm onIngredientAdd={ing => setIngredients({
      ...ingredients,
      [ing.name]: createIngredient(ing.amount)
    }) }/>
    <CustomIngredientForm onIngredientAdd={ing => setIngredients({
      ...ingredients,
      [ing.name]: createIngredient(ing.amount),
    }) }/>
    {ingsArray.map(([name, ing]) => <GoalIngredient
      key={name}
      name={name}
      ingredient={ing}
      onChangeActive={(newActive) => {
        const obj = { ...ingredients }
        obj[name] = { ...obj[name], active: newActive }
        setIngredients(obj)
      }}
      onChangeAmount={(amount) => {
        const obj = { ...ingredients }
        obj[name] = { ...obj[name], amount }
        setIngredients(obj)
      }}
      onDelete={() => {
        const obj = { ...ingredients }
        delete obj[name]
        setIngredients(obj)
      }}
    />)}
    <div>
      <h2>Total</h2>
      {total.map(([name, amount]) => <div key={name}>
        <>{name} ({amount})</>
      </div>)}
    </div>
  </div>
}
