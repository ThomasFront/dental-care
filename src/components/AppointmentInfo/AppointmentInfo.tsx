import React from 'react'
import { useDispatch } from 'react-redux'
import { AppointmentType, deleteAppointment } from '../../store/slices/userSlice'
import { ButtonContainer, Wrapper } from './AppointmentInfo.styles'

type InfoType = {
  info: AppointmentType
  index: number
}


export const AppointmentInfo = ({ info, index }: InfoType) => {
  const { date, hour, doctorName } = info
  const dispatch = useDispatch()

  const handleDelete = (index: number) => {
    dispatch(deleteAppointment(index))
  }
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
        <button onClick={() => handleDelete(index)}>Odwołaj</button>
      </ButtonContainer>
    </Wrapper>
  )
}
