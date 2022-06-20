import type { Goal } from './types'

export function setGoals(goals: Goal[]) {
  localStorage.setItem('goals', JSON.stringify(goals))
}
