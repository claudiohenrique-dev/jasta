import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { useTheme } from 'styled-components'
import { ClipboardText, PlusCircle } from 'phosphor-react'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { TaskItem } from '@/components/TaskItem'
import { ITask } from '@/components/TaskItem/types'

import { HomeContainer, NewTaskForm, TasksContainer, TasksHeader, TasksList, TasksListEmpty } from './styles'

const LOCAL_STORAGE_KEY = 'jasta:savedTasks'

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const { colors } = useTheme()

  const checkedTasks = tasks.filter(task => task.checked).length

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id)
    setTasksAndSave(tasksWithoutDeletedOne)
  }

  function handleCheckTask(id: string) {
    const tasksWithCheckedOne = tasks.map(task => {
      if (task.id === id) return { ...task, checked: !task.checked }
      return task
    })
    setTasksAndSave(tasksWithCheckedOne)
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

    setTasksAndSave(newTasks)

    setInputValue('')
  }

  function onChangeNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) setTasks(JSON.parse(saved))
  }

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

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
          {tasks ? (
            tasks.map(task => (
              <TaskItem key={task.id} task={task} onCheck={handleCheckTask} onDelete={handleDeleteTask} />
            ))
          ) : (
            <TasksListEmpty>
              <ClipboardText color={colors['gray-300']} size={72} />
              <p>You don't have any created tasks yet</p>
              <p>Create tasks and organize your to-do items</p>
            </TasksListEmpty>
          )}
        </TasksList>
      </TasksContainer>
    </HomeContainer>
  )
}
