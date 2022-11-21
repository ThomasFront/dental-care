import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TextWrapper } from '../../components/TextWrapper'
import { StrapiDoctorType } from '../../types/strapi'
import { DoctorWrapper, TextContainer, Wrapper } from './DoctorPage.styles'

export const DoctorPage = () => {
  const [doctor, setDoctor] = useState<StrapiDoctorType['data']['attributes'] | null>()
  const { id } = useParams()
  const image = doctor?.Avatar.data.attributes.url

  const getDoctor = async () => {
    const response = await axios.get<StrapiDoctorType>(`http://localhost:1337/api/doctors/${id}?populate=*`)
    setDoctor(response.data.data.attributes)
  }

  console.log(doctor)
  useEffect(() => {
    getDoctor()
  }, [])

  return (
    <Wrapper>
      <TextWrapper>
        <DoctorWrapper>
          <img src={`http://localhost:1337${image}`} alt="" />
          <TextContainer>
            <h2>{doctor?.Name}</h2>
            <h3>Główne informacje:</h3>
            <p>{doctor?.Description}</p>
            <h3>Informacje dodatkowe:</h3>
            <p>{doctor?.AdditionalInfo}</p>
          </TextContainer>
        </DoctorWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
