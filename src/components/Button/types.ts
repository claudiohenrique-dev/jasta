import React, { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
