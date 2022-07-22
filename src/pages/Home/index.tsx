import { useState } from 'react'

import { tasks as mockTasks } from '@/constants/tasks'
import { TaskItem } from '@/components/TaskItem'
import { NewTaskForm } from '@/components/NewTaskForm'

import { HomeContainer, NewTaskContainer, TasksContainer, TasksHeader, TasksList } from './styles'

export function Home() {
  const [tasks, setTasks] = useState(mockTasks)
  const checkedTasks = tasks.filter(task => task.checked).length

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id)
    setTasks(tasksWithoutDeletedOne)
  }

  function handleCheckTask(id: string) {
    const tasksWithCheckedOne = tasks.map(task => {
      if (task.id === id) return { ...task, checked: !task.checked }
      return task
    })
    setTasks(tasksWithCheckedOne)
  }

  return (
    <HomeContainer>
      <NewTaskContainer>
        <NewTaskForm />
      </NewTaskContainer>

      <TasksContainer>
        <TasksHeader>
          <span>
            <p>Created tasks</p>
            <div>{tasks.length}</div>
          </span>

          <span>
            <p>Completed</p>
            <div>{`${checkedTasks} of ${tasks.length}`}</div>
          </span>
        </TasksHeader>

        <TasksList>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onCheck={handleCheckTask} onDelete={handleDeleteTask} />
          ))}
        </TasksList>
      </TasksContainer>
    </HomeContainer>
  )
}
