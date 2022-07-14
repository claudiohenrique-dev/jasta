import styled from 'styled-components'

export const InputContainer = styled.input`
  background: ${({ theme }) => theme.colors['gray-500']};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors['gray-100']};
  height: 3.5rem;
  padding: 16px;
  width: 100%;
`
