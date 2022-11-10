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
    deleteAppointment: (state, action: PayloadAction<number>) => {
      const indexToDelete = action.payload
      state.appointments.splice(indexToDelete, 1)
    }
  },
})

export const AppointmentsSelector = (state: RootState) => state.user.appointments
export const { addAppointment, deleteAppointment } = userSlice.actions
export default userSlice.reducer