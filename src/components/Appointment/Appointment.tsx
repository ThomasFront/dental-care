import React from 'react'
import { doctors } from '../../utils'
import { Wrapper } from '../TextWrapper/TextWrapper.styles'
import { SelectsContainer, Subtitled, TitleBox } from './Appointment.styles'

export const Appointment = () => {
  return (
    <Wrapper>
      <TitleBox>
        <p>Umów wizytę:</p>
      </TitleBox>
      <SelectsContainer>
      <Subtitled>Wybierz stomatologa:</Subtitled>
        <select>
          {doctors.map(doctor => <option>{doctor.name}</option>)}
        </select>
        <Subtitled>Wybierz date:</Subtitled>
      </SelectsContainer>
    </Wrapper>
  )
}
