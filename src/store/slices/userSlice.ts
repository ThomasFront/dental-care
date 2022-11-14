import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type AppointmentType = {
  date: string,
  hour: string,
  hourId: string,
  doctorName: string,
  doctorId: string,
  id: string
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
    deleteAppointment: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload
      state.appointments = state.appointments.filter(appointment => appointment.id !== idToDelete)
    }
  },
})

export const AppointmentsSelector = (state: RootState) => state.user.appointments
export const { addAppointment, deleteAppointment } = userSlice.actions
export default userSlice.reducer