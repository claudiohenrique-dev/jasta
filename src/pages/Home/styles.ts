import styled from 'styled-components'

export const HomeContainer = styled.div``

export const NewTaskContainer = styled.div`
  position: relative;
  top: calc(-1 * 3.5rem / 2);
`

export const TasksContainer = styled.main`
  /* border: 1px solid white; */
  height: 50vh;
  width: 100%;
`

export const TasksHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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

export const TasksList = styled.div``
