import React from 'react'
import {ButtonConatainer} from './styles'

export const Button = ({label, onClick}) => {
  return (
    <ButtonConatainer onClick={onClick}>{label}</ButtonConatainer>
  )
}
