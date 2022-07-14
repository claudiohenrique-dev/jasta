import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 8px;
  width: 100%;

  input {
    background: ${({ theme }) => theme.colors['gray-500']};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors['gray-100']};
    padding: 16px;
    width: 100%;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors['gray-300']};
  }
`
