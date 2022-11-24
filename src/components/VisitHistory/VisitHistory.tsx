import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { auth, db } from '../../firebase'
import { addAppointment, appointmentsLoadedSelector, AppointmentsSelector, AppointmentType, setAppointmentsLoaded } from '../../store/slices/userSlice'
import { AppointmentInfo } from '../AppointmentInfo'
import { AllVisitsContainer, Container, EmptyVisitsText, TitleBox, VisitInformation } from './VisitHistory.styles'

export const VisitHistory = () => {
  const allAppointments = useSelector(AppointmentsSelector)
  const [user] = useAuthState(auth)
  const appointmentsLoaded = useSelector(appointmentsLoadedSelector)
  const dispatch = useDispatch()

  const getFirebaseAppointments = async () => {
    const q = query(collection(db, "appointments"), where("userId", "==", user?.uid));
    const docs = await getDocs(q)
    const data = docs.docs.map(appointment => appointment.data()) as Array<AppointmentType>
    data.forEach(appointment => dispatch(addAppointment(appointment)))
    dispatch(setAppointmentsLoaded())
  }

  useEffect(() => {
    if (!appointmentsLoaded && user) {
      getFirebaseAppointments()
    }
  }, [user])

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
              {allAppointments.map(appointment => <AppointmentInfo info={appointment} key={appointment.id} />)}
            </AllVisitsContainer>
          </>
          :
          <EmptyVisitsText>Brak umówionych wizyt</EmptyVisitsText>
        }
      </Container>
    </>
  )
}
