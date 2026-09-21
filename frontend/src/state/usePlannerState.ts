import { useEffect, useState } from 'react'

export type PlannerState = {
  programmeId: string
  minorId: string
  semester: 'Semester 1' | 'Semester 2'
}

const defaultPlannerState: PlannerState = {
  programmeId: 'business-analytics',
  minorId: 'computer-science',
  semester: 'Semester 2',
}

const STORAGE_KEY = 'nusplan-planner-state'

export function usePlannerState() {
  const [state, setState] = useState<PlannerState>(() => {
    const savedState = localStorage.getItem(STORAGE_KEY)

    if (!savedState) {
      return defaultPlannerState
    }

    try {
      return {
        ...defaultPlannerState,
        ...JSON.parse(savedState),
      }
    } catch {
      return defaultPlannerState
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  function updateState<Key extends keyof PlannerState>(
    key: Key,
    value: PlannerState[Key],
  ) {
    setState((currentState) => ({
      ...currentState,
      [key]: value,
    }))
  }

  return {
    state,
    updateState,
  }
}