import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors['gray-700']};
  display: flex;
  height: 12.5rem;
  justify-content: center;
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 12px;

  h1 {
    font-size: ${({ theme }) => theme.sizes['3xl']};
    font-weight: 900;

    span:first-child {
      color: ${({ theme }) => theme.colors.blue};
    }

    span:last-child {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`
