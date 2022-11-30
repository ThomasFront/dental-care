import { deleteDoc, doc } from 'firebase/firestore'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../../firebase'
import { AppointmentType, deleteAppointment } from '../../store/slices/userSlice'
import { Modal } from '../Modal'
import { ButtonContainer, ButtonsWrapper, ModalBtn, Wrapper } from './AppointmentInfo.styles'

type InfoType = {
  info: AppointmentType
}


export const AppointmentInfo = ({ info }: InfoType) => {
  const { date, hour, doctorName, id } = info
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = async () => {
    setShowModal(false)
    dispatch(deleteAppointment(id))
    await deleteDoc(doc(db, "appointments", id));
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
            <ModalBtn confirm onClick={handleDelete}>Tak</ModalBtn>
            <ModalBtn onClick={() => setShowModal(false)}>Nie</ModalBtn>
          </ButtonsWrapper>
        </Modal>
      }
    </>
  )
}
