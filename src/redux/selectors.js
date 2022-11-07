import { statusFilters } from "./constatns";

export const selectTasks = state => state.tasks.items
export const selectIsActive = state => state.tasks.isActive
export const selectError = state => state.tasks.error
export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = (state) => {
const tasks = selectTasks(state)
const statusFilter = selectStatusFilter(state)

  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);  
    case statusFilters.completed:
      return tasks.filter(task=> task.completed)
    default:
      return tasks
  }
}

export const selectTaskCount = state => {
  const tasks = selectTasks(state)

  return tasks.reduce((acc, task) => {
    if (task.completed) {
      acc.completed +=1
    } else {
      acc.active +=1
    }
    return acc
  }, { active: 0, completed: 0 })
}