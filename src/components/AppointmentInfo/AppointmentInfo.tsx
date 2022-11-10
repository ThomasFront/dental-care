import React from 'react'
import { AppointmentType } from '../../store/slices/userSlice'
import { ButtonContainer, Wrapper } from './AppointmentInfo.styles'

type InfoType = {
  info: AppointmentType
}

export const AppointmentInfo = ({ info }: InfoType) => {
  const { date, hour, doctorName } = info
  return (
    <Wrapper>
      <div>
        <p>{date}</p>
      </div>
      <div>
        <p>{hour}</p>
      </div>
      <div>
        <p>{doctorName}</p>
      </div>
      <ButtonContainer>
        <button>Odwołaj</button>
      </ButtonContainer>
    </Wrapper>
  )
}
