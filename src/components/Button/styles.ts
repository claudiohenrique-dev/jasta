import styled from 'styled-components'

export const ButtonContainer = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors['blue-dark']};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 3.5rem;
  justify-content: center;
  padding: 16px;
  transition: all ease-in-out 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors['blue']};
  }

  p {
    color: ${({ theme }) => theme.colors['gray-100']};
    font-size: ${({ theme }) => theme.sizes.base};
    font-weight: bold;
  }
`

export const IconContainer = styled.span`
  color: ${({ theme }) => theme.colors['gray-100']};
  display: flex;
`
