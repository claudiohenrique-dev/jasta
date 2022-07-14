import { ButtonProps } from './types'

import { ButtonContainer, IconContainer } from './styles'

export function Button({ text, leftIcon, rightIcon, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <p>{text}</p>
      {rightIcon && <IconContainer>{rightIcon}</IconContainer>}
    </ButtonContainer>
  )
}
