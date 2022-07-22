import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors['gray-700']};
  display: flex;
  height: 12.5rem;
  justify-content: center;
`

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.purple};
    font-size: ${({ theme }) => theme.sizes['3xl']};
    font-weight: 900;

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  img {
    height: 3.5rem;
    padding: 0.5rem;
    width: 3.5rem;
  }
`
