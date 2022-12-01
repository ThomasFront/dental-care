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

export type UserInfoType = {
  name: string,
  email: string,
  surname: string,
  uid: string,
  photoUrl?: string
}

export interface CounterState {
  appointments: Array<AppointmentType>
  user: null | UserInfoType
  appointmentsLoaded: boolean
}

const initialState: CounterState = {
  appointments: [],
  user: null,
  appointmentsLoaded: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<AppointmentType>) => {
      if(!state.appointments.some(item => item.id === action.payload.id)){
        state.appointments.push(action.payload)
      }
    },
    deleteAppointment: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload
      state.appointments = state.appointments.filter(appointment => appointment.id !== idToDelete)
    },
    updateUserInfo: (state, action: PayloadAction<UserInfoType>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
      state.appointments = []
    },
    updateUserAvatar: (state, action: PayloadAction<string>) => {
      if(state.user){
        state.user.photoUrl = action.payload
      }
    },
    setAppointmentsLoaded: (state) => {
      state.appointmentsLoaded = true
    }
  },
})

export const appointmentsLoadedSelector = (state: RootState) => state.user.appointmentsLoaded
export const AppointmentsSelector = (state: RootState) => state.user.appointments
export const userSelector = (state: RootState) => state.user.user
export const { addAppointment, deleteAppointment, updateUserInfo, logout, updateUserAvatar, setAppointmentsLoaded } = userSlice.actions
export default userSlice.reducer