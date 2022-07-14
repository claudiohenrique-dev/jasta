import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
