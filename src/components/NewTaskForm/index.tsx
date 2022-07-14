import { PlusCircle } from 'phosphor-react'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

import { Container } from './styles'

export function NewTaskForm() {
  return (
    <Container>
      <Input type='text' placeholder='Add new task' />
      <Button text='Criar' rightIcon={<PlusCircle size={24} />} />
    </Container>
  )
}
