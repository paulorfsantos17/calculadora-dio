import React from 'react'
import {InputContainer} from  './styles'


export const Input = ({value}) => {
  return(
    <InputContainer>
      <input type="text"  disabled value={value}/>
    </InputContainer>
  )
}
