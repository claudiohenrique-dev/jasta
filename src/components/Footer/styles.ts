import styled from 'styled-components'

export const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.colors['gray-700']};
  justify-content: center;
  padding: 2rem 0;
  width: 100%;

  p {
    align-items: center;
    display: flex;
    justify-content: center;

    svg {
      margin: 0 4px;
    }
  }

  a:visited,
  a {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
    text-decoration: none;
    margin: 0 4px;
  }
`
