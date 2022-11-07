import React from 'react'
import { services } from '../../../utils'
import { SectionTitle } from '../../SectionTitle'
import { ServiceCard } from '../../ServiceCard'
import { TextWrapper } from '../../TextWrapper'
import { ContentContainer, GrayFade, ServicesContainer, Wrapper } from './Services.styles'

export const Services = () => {
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
