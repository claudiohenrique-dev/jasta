import { NewTaskForm } from '@/components/NewTaskForm'

import { Container, NewTaskContainer, Title } from './styles'

export function Home() {
  return (
    <Container>
      <NewTaskContainer>
        <NewTaskForm />
      </NewTaskContainer>
    </Container>
  )
}
