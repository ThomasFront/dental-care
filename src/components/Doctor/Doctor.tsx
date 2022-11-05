import React from 'react'
import { FbIcon, LinkedIcon, ToothIcon, TwitterIcon, Wrapper } from './Doctor.styles'

type DoctorType = {
  doctor: {
    id: number,
    image: string,
    alt: string,
    name: string
  }
}

export const Doctor = ({ doctor }: DoctorType) => {
  const { image, alt, name } = doctor
  return (
    <Wrapper>
      <img src={image} alt={alt} />
      <h2>{name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident nobis repudiandae dolores. Nam aliquam ad, quas asperiores beatae accusantium.</p>
      <ToothIcon />
      <div>
        <a href="#"><FbIcon /></a>
        <a href="#"><TwitterIcon /></a>
        <a href="#"><LinkedIcon /></a>
      </div>
    </Wrapper>
  )
}
