import React, { useState } from 'react'
import { appointmentHours, doctors } from '../../utils'
import { Wrapper } from '../TextWrapper/TextWrapper.styles'
import { AddVisitBtn, CalendarWrapper, ModalButton, SelectsContainer, Subtitled, TitleBox } from './Appointment.styles'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux'
import { addAppointment, AppointmentsSelector, AppointmentType } from '../../store/slices/userSlice'
import { format } from 'date-fns'
import { Modal } from '../Modal'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

type SelectedCategoryType = {
  setSelectedCategory: (value: string) => void
}

export const Appointment = ({setSelectedCategory}: SelectedCategoryType) => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].id)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedHour, setSelectedHour] = useState(appointmentHours[0].value)
  const [showModal, setShowModal] = useState(false)
  const allAppointments = useSelector(AppointmentsSelector)
  const dispatch = useDispatch()

  const handleAppointment = () => {
    const payload: AppointmentType = {
      date: format(selectedDate, 'dd-MM-yyyy'),
      hour: `${selectedHour}:00 - ${parseInt(selectedHour) + 1}:00`,
      doctorId: selectedDoctor,
      doctorName: doctors.filter(doctor => doctor.id === selectedDoctor)[0].name
    }
    dispatch(addAppointment(payload))
    setShowModal(true)
  }

  const checkAllAppointments = () => {
    setSelectedCategory('History')
    setShowModal(false)
  }

  return (
    <>
      <Wrapper>
        <TitleBox>
          <p>Umów wizytę:</p>
        </TitleBox>
        <SelectsContainer>
          <Subtitled>Wybierz stomatologa:</Subtitled>
          <select value={selectedDoctor} onChange={e => setSelectedDoctor(e.target.value)}>
            {doctors.map(doctor =>
              <option value={doctor.id} key={doctor.id}>{doctor.name}</option>
            )}
          </select>
          <Subtitled>Wybierz date:</Subtitled>
          <CalendarWrapper>
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              minDate={new Date()}
              maxDate={new Date("12-31-2023")}
            />
          </CalendarWrapper>

          <Subtitled>Wybierz godzine:</Subtitled>
          <select value={selectedHour} onChange={e => setSelectedHour(e.target.value)}>
            {appointmentHours.map(({ label, value }) =>
              <option value={value} key={value}>{label}</option>
            )}
          </select>
          <AddVisitBtn onClick={handleAppointment}>Umów wizytę</AddVisitBtn>
        </SelectsContainer>
      </Wrapper>
      {showModal &&
        <Modal>
          <h2>Twoja wizyta została umówiona</h2>
          <p>Data: <span>{allAppointments[allAppointments.length - 1]?.date}</span></p>
          <p>Godzina: <span>{allAppointments[allAppointments.length - 1]?.hour}</span></p>
          <p>Lekarz: <span>{allAppointments[allAppointments.length - 1]?.doctorName}</span></p>
          <ModalButton onClick={checkAllAppointments}>Zobacz umówione wizyty</ModalButton>
        </Modal>
      }
    </>
  )
}
