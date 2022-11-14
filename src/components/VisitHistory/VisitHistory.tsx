import React from 'react'
import { useSelector } from 'react-redux'
import { AppointmentsSelector } from '../../store/slices/userSlice'
import { AppointmentInfo } from '../AppointmentInfo'
import { AllVisitsContainer, Container, EmptyVisitsText, TitleBox, VisitInformation } from './VisitHistory.styles'

export const VisitHistory = () => {
  const allAppointments = useSelector(AppointmentsSelector)
  return (
    <>
      <TitleBox>
        <p>Umówione wizyty:</p>
      </TitleBox>
      <Container>
        {allAppointments.length ?
          <>
            <VisitInformation>
              <p>Data</p>
              <p>Godzina</p>
              <p>Lekarz</p>
              <p>Akcja</p>
            </VisitInformation>
            <AllVisitsContainer>
              {allAppointments.map(appointment => <AppointmentInfo info={appointment} key={appointment.id}/>)}
            </AllVisitsContainer>
          </>
          :
          <EmptyVisitsText>Brak umówionych wizyt</EmptyVisitsText>
        }
      </Container>
    </>
  )
}
