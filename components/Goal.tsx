import { useState, useEffect, useMemo } from 'react'
import type { Goal } from '../models/goals'
import { deleteGoal } from '../models/goals'
import type { IngredientObject } from '../models/ingredients'
import {
  breakdownIngredient,
  setIngredients as _setIngredients,
  getIngredients,
} from '../models/ingredients'
import { recipesObject } from '../data'
import { IngredientForm } from './IngredientForm'
import { CustomIngredientForm } from './CustomIngredientForm'

export function GoalComponent(props: { goal: Goal }) {
  const [ingredients, setIngredients] = useState<IngredientObject>({})
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
  const ingsArray = useMemo(() => Object.entries(ingredients), [ingredients])
  const total = useMemo(() => {
    const state = {}
    Object.entries(ingredients).forEach(([name, amount]) => {
      breakdownIngredient(name, amount, state)
    })
    return JSON.stringify(state)
  }, [ingredients])
  return <div>
    <h2>'{props.goal.name}' goal</h2>
    <div>
      <button onClick={() => deleteGoal(props.goal)}>Delete</button>
    </div>
    <IngredientForm onIngredientAdd={ing => setIngredients({ ...ingredients, [ing.name]: ing.amount }) }/>
    <CustomIngredientForm onIngredientAdd={ing => setIngredients({ ...ingredients, [ing.name]: ing.amount }) }/>
    {ingsArray.map(([name, amount]) => <div key={name}>
      {name} ({amount})
      <button onClick={() => {
        const obj = { ...ingredients }
        delete obj[name]
        setIngredients(obj)
      }}>X</button>
    </div>)}
    <div>
      Total: {total}
    </div>
  </div>
}
