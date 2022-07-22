export interface ITask {
  id: string
  checked: boolean
  content: string
}

export interface ITaskItem {
  task: ITask
  onCheck: (id: string) => void
  onDelete: (id: string) => void
}
