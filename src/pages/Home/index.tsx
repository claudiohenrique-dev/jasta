import { ChangeEvent, FormEvent, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from 'phosphor-react'

import { tasks as mockTasks } from '@/constants/tasks'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { TaskItem } from '@/components/TaskItem'

import { HomeContainer, NewTaskForm, TasksContainer, TasksHeader, TasksList } from './styles'

export function Home() {
  const [tasks, setTasks] = useState(mockTasks)
  const [inputValue, setInputValue] = useState('')

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

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        content: inputValue,
        checked: false,
      },
    ]

    setTasks(newTasks)

    setInputValue('')
  }

  function onChangeNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  return (
    <HomeContainer onSubmit={handleSubmit}>
      <NewTaskForm>
        <Input type='text' placeholder='Add new task' onChange={onChangeNewTaskText} value={inputValue} />
        <Button text='Create' rightIcon={<PlusCircle size={24} />} />
      </NewTaskForm>

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
