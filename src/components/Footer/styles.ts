import styled from 'styled-components'

export const FooterContainer = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.colors['gray-700']};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 2rem 0;

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
    margin: 0 4px;
    text-decoration: none;
  }
`
