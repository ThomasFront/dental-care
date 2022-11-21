import React from 'react'
import { DoctorType } from '../../types/strapi'
import { FbIcon, LinkedIcon, ToothIcon, TwitterIcon, Wrapper } from './Doctor.styles'

type DoctorProps = {
  doctor: DoctorType
  id: number
}


export const Doctor = ({ doctor, id }: DoctorProps) => {
  return (
    <Wrapper to={`/doctor/${id}`}>
      <img
        src={`http://localhost:1337${doctor.Avatar.data.attributes.url}`}
        alt={`Fotografia przedstawiająca stomatologa ${doctor.Name}`} />
      <h2>{doctor.Name}</h2>
      <p>{doctor.Description}</p>
      <ToothIcon />
      <div>
        <a href="#"><FbIcon /></a>
        <a href="#"><TwitterIcon /></a>
        <a href="#"><LinkedIcon /></a>
      </div>
    </Wrapper>
  )
}
