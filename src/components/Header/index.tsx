import logoImg from '@/assets/logo-todo.svg'

import { HeaderContainer, TitleContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <img src={logoImg} />

        <h1>
          just another silly <span>todo</span> app
        </h1>
      </TitleContainer>
    </HeaderContainer>
  )
}
