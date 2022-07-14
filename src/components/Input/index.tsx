import { InputProps } from './types'

import { InputContainer } from './styles'

export function Input({ ...rest }: InputProps) {
  return <InputContainer {...rest} />
}
