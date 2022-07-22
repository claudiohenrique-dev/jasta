import { useTheme } from 'styled-components'
import { CheckCircle, Circle } from 'phosphor-react'

import { ITaskItem } from './types'
import { CheckButton, DeleteButton, TaskItemContainer, TaskText, TrashIcon } from './styles'

export function TaskItem({ task, onCheck, onDelete }: ITaskItem) {
  const { colors } = useTheme()

  return (
    <TaskItemContainer>
      <div>
        <CheckButton onClick={() => onCheck(task.id)}>
          {task.checked ? (
            <CheckCircle color={colors['purple-dark']} size={24} weight='fill' />
          ) : (
            <Circle color={colors.blue} size={24} />
          )}
        </CheckButton>
        <TaskText checked={task.checked}>{task.content}</TaskText>
      </div>

      <DeleteButton onClick={() => onDelete(task.id)} title='Delete task'>
        <TrashIcon size={24} />
      </DeleteButton>
    </TaskItemContainer>
  )
}
