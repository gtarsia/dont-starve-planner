import type { Goal } from './types'

export function getGoals(): Goal[] {
  return JSON.parse(window.localStorage.getItem('goals') || '[]')
}
