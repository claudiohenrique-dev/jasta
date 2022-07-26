import styled from 'styled-components'

export const FooterContainer = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.colors['gray-700']};
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: center;

  p > {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  a:visited,
  a {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
    text-decoration: none;
  }
`
