import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin: 0 auto;
  max-width: 46rem;
`

export const NewTaskForm = styled.form`
  display: flex;
  gap: 8px;
  position: relative;
  top: calc(-1 * 3.5rem / 2);
`

export const TasksContainer = styled.main`
  /* height: 50vh; */
  width: 100%;
`

export const TasksHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0 1.5rem 0;

  span {
    display: flex;
    gap: 0.5rem;
  }

  span p {
    font-size: ${({ theme }) => theme.sizes.sm};
    font-weight: bold;
  }

  span:first-child p {
    color: ${({ theme }) => theme.colors.blue};
  }

  span:last-child p {
    color: ${({ theme }) => theme.colors.purple};
  }

  span div {
    background: ${({ theme }) => theme.colors['gray-400']};
    border-radius: 999px;
    color: ${({ theme }) => theme.colors['gray-200']};
    font-size: ${({ theme }) => theme.sizes.xs};
    font-weight: bold;
    padding: 2px 8px;
  }
`

export const TasksList = styled.div`
  padding-bottom: 4rem;
`

export const TasksListEmpty = styled.div`
  align-items: center;
  background: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors['gray-400']};
  display: flex;
  flex-direction: column;
  height: 15rem;
  justify-content: center;
  margin: 1.5rem 0;
  width: 100%;

  svg {
    margin: 0 0 1rem 0;
  }

  p {
    color: ${({ theme }) => theme.colors['gray-300']};
  }

  p > span {
    font-weight: bold;
  }
`
