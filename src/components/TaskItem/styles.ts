import styled from 'styled-components'
import { Trash } from 'phosphor-react'

export const TaskItemContainer = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.colors['gray-500']};
  border-radius: 8px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  list-style: none;
  margin: 8px 0;
  padding: 12px;

  div {
    align-items: center;
    display: flex;
    gap: 12px;
    margin: 0;
  }
`

export const TaskText = styled.p<{ checked: boolean }>`
  color: ${({ checked, theme }) => (checked ? theme.colors['gray-300'] : theme.colors['gray-100'])};
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`

export const CheckButton = styled.button`
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: center;
`

export const DeleteButton = styled.button`
  align-items: center;
  background: transparent;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  min-height: 32px;
  min-width: 32px;
  transition: all ease-in-out 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors['gray-400']};
  }
`

export const TrashIcon = styled(Trash)`
  color: ${({ theme }) => theme.colors['gray-300']};
  transition: all ease-in-out 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`
