import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['purple-dark']};
    outline: 0;
  }

  body {
    color: ${({ theme }) => theme.colors['gray-100']};
    background: ${({ theme }) => theme.colors['gray-600']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    border: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }
`
