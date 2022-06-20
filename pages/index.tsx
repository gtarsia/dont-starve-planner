import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { getGoals, setGoals as _setGoals } from '../models/goals'
import type { Goal } from '../models/goals'
import { GoalComponent } from '../components/Goal'
// import styles from '../styles/Home.module.css'
//

const Home: NextPage = () => {
  const [goals, setGoals] = useState<Goal[]>([])
  const [ready, setReady] = useState(false)
  const [selected, setSelected] = useState<Goal | null>(null)
  useEffect(() => {
    setGoals(getGoals())
  }, [])
  useEffect(() => {
    setReady(true)
    if (ready) {
      _setGoals(goals)
    }
  }, [goals])
  return <div>
    <h1>Don't Starve planner</h1>
    <div>
      <button onClick={() => {
        const name = window.prompt("What's the name of the goal")
        if (name) {
          setGoals([...goals, { name }])
        }
      }}>
        Add Goal
      </button>
    </div>
    {goals.map((goal, i) => <button
      key={i}
      onClick={() => setSelected(goal)}
    >
      {goal.name}
    </button>)}
    {selected && <GoalComponent goal={selected} />}
  </div>
}

export default Home
