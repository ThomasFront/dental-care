import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DoctorTypeAdditional } from '../../types/strapi'
import { FbIcon, LinkedIcon, ToothIcon, TwitterIcon, Wrapper } from './Doctor.styles'

type DoctorProps = {
  doctor: DoctorTypeAdditional
  id: number
}


export const Doctor = ({ doctor, id }: DoctorProps) => {
  const navigate = useNavigate()
  return (
    <Wrapper onClick={() => navigate(`/doctor/${id}`)}>
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
