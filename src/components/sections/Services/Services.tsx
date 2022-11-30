import axios from 'axios'
import { useEffect, useState } from 'react'
import { ServiceType, StrapiArrayType } from '../../../types/strapi'
import { SectionTitle } from '../../SectionTitle'
import { ServiceCard } from '../../ServiceCard'
import { ContentContainer, GrayFade, ServicesContainer, Wrapper } from './Services.styles'

type ServicesType = StrapiArrayType<ServiceType>

export const Services = () => {
  const [services, setServices] = useState<ServicesType['data']>([])

  const getServices = async () => {
    const response = await axios.get<ServicesType>('http://localhost:1337/api/services?populate=*')
    setServices(response.data.data)
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
            {services.map(service => <ServiceCard key={service.id} service={service.attributes} />)}
          </ServicesContainer>
        </ContentContainer>
      </Wrapper>
      <GrayFade />
    </div>
  )
}
