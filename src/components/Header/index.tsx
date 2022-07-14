import logoImg from '@/assets/logo-todo.svg'

import { HeaderContainer, TitleContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <img src={logoImg} />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </TitleContainer>
    </HeaderContainer>
  )
}
