import React, { useState } from 'react'
import { doctors } from '../../utils'
import { Wrapper } from '../TextWrapper/TextWrapper.styles'
import { AddVisitBtn, CalendarWrapper, SelectsContainer, Subtitled, TitleBox } from './Appointment.styles'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const Appointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].name)
  const [selectedDate, setSelectedDate] = useState(new Date())
  console.log(selectedDoctor)
  console.log(selectedDate)

  return (
    <Wrapper>
      <TitleBox>
        <p>Umów wizytę:</p>
      </TitleBox>
      <SelectsContainer>
        <Subtitled>Wybierz stomatologa:</Subtitled>
        <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
          {doctors.map(doctor =>
            <option key={doctor.id}>{doctor.name}</option>
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
        <AddVisitBtn>Umów wizytę</AddVisitBtn>
      </SelectsContainer>
    </Wrapper>
  )
}
