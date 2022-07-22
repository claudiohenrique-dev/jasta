import { v4 as uuidv4 } from 'uuid'

import { ITask } from '@/components/TaskItem/types'

export const tasks: ITask[] = [
  {
    id: uuidv4(),
    content: 'Task 1',
    checked: false,
  },
  {
    id: uuidv4(),
    content: 'Task 2',
    checked: false,
  },
  {
    id: uuidv4(),
    content: 'Task 3',
    checked: false,
  },
  {
    id: uuidv4(),
    content: 'Task 4',
    checked: false,
  },
]
