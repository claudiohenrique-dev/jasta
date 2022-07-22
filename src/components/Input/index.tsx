import { IInput } from './types'

import { InputContainer } from './styles'

export function Input({ ...rest }: IInput) {
  return <InputContainer {...rest} />
}
