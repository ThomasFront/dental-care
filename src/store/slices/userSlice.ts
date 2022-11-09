import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type AppointmentType = {
  date: string,
  hour: string,
  doctorName: string,
  doctorId: string
}

export interface CounterState {
  appointments: Array<AppointmentType>
}

const initialState: CounterState = {
  appointments: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<AppointmentType>) => {
      state.appointments.push(action.payload)
    },
  },
})

const handleDate = (date: string, time: string) => {
  const newDate = date.split('-').map(value => parseInt(value))
  const newTime = parseInt(time.split(':')[0])
  return new Date(newDate[2], newDate[0], newDate[1], newTime, 0).valueOf()
}

export const AppointmentsSelector = 
  (state: RootState) => [...state.user.appointments]
    .sort((b,a) => handleDate(b.date, b.hour) - handleDate(a.date, a.hour))
export const { addAppointment } = userSlice.actions
export default userSlice.reducer