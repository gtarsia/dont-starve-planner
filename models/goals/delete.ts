import type { Goal } from './types'
import { getGoals } from './get'
import { setGoals } from './set'

export function deleteGoal(goal: Goal) {
  return setGoals(getGoals().filter(g => g.name !== goal.name))
}
