import axios from 'axios'
import React, { useEffect } from 'react'
import { services } from '../../../utils'
import { SectionTitle } from '../../SectionTitle'
import { ServiceCard } from '../../ServiceCard'
import { TextWrapper } from '../../TextWrapper'
import { ContentContainer, GrayFade, ServicesContainer, Wrapper } from './Services.styles'

type StrapiArrayType<T> = {
  data: Array<{
    id: number,
    attributes: {
      createdAt: string,
      publishedAt: string,
      updatedAt: string
    } & T
  }>
}

type ServicesType = StrapiArrayType<{
  Description: string,
  Title: string,
}>

export const Services = () => {
  const getServices = () => {
    axios.get('http://localhost:1337/api/services').then(response => {
      console.log(response);
    });
  }

  useEffect(() => {
    getServices()
  }, [])

  return (
    <div id='services'>
      <Wrapper>
        <ContentContainer>
          <SectionTitle>Usługi</SectionTitle>
          <ServicesContainer>
            {services.map(service => <ServiceCard key={service.id} service={service} />)}
          </ServicesContainer>
        </ContentContainer>
      </Wrapper>
      <GrayFade />
    </div>
  )
}
