import React, { useState } from 'react'
import { appointmentHours, doctors } from '../../utils'
import { Wrapper } from '../TextWrapper/TextWrapper.styles'
import { AddVisitBtn, CalendarWrapper, SelectsContainer, Subtitled, TitleBox } from './Appointment.styles'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux'
import { addAppointment, AppointmentType } from '../../store/slices/userSlice'
import { format } from 'date-fns'

export const Appointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].id)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedHour, setSelectedHour] = useState(appointmentHours[0].value)
  const dispatch = useDispatch()

  const handleAppointment = () => {
    const payload: AppointmentType = {
      date: format(selectedDate, 'dd-MM-yyyy'),
      hour: `${selectedHour}:00 - ${parseInt(selectedHour) + 1}:00`,
      doctorId: selectedDoctor,
      doctorName: doctors.filter(doctor => doctor.id === selectedDoctor)[0].name
    }
    dispatch(addAppointment(payload))
  }

  return (
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
  )
}
