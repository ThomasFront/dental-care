import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppointmentType, deleteAppointment } from '../../store/slices/userSlice'
import { Modal } from '../Modal'
import { ButtonContainer, ButtonsWrapper, ModalBtn, Wrapper } from './AppointmentInfo.styles'

type InfoType = {
  info: AppointmentType
  index: number
}


export const AppointmentInfo = ({ info, index }: InfoType) => {
  const { date, hour, doctorName } = info
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  // const deleteVisit = (index: number) => {
  //   dispatch(deleteAppointment(index))
  // }

  const handleDelete = (index: number) => {
    setShowModal(false)
    dispatch(deleteAppointment(index))
  }
  return (
    <>
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
          <button onClick={() => setShowModal(true)}>Odwołaj</button>
        </ButtonContainer>
      </Wrapper>
      {showModal &&
        <Modal>
          <h2>Czy na pewno chcesz odwołać wizytę?</h2>
          <ButtonsWrapper>
            <ModalBtn confirm onClick={() => handleDelete(index)}>Tak</ModalBtn>
            <ModalBtn onClick={() => setShowModal(false)}>Nie</ModalBtn>
          </ButtonsWrapper>
        </Modal>
      }
    </>
  )
}
