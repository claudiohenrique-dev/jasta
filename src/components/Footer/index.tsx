import { Heart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { FooterContainer } from './styles'

export function Footer() {
  const { colors } = useTheme()

  const year = new Date().getFullYear()

  return (
    <FooterContainer>
      <p>
        Copyright &copy; {year} - Develop with <Heart color={colors.blue} size={18} weight='fill' /> and React by
        <a href='https://claudiohenrique.vercel.app'> Cláudio Henrique</a>
      </p>
    </FooterContainer>
  )
}
