import axios from 'axios'
import { useEffect, useState } from 'react'
import { ServiceType, StrapiArrayType } from '../../../types/strapi'
import { LoadingSpinner } from '../../LoadingSpinner'
import { SectionTitle } from '../../SectionTitle'
import { ServiceCard } from '../../ServiceCard'
import { LoadingContainer } from '../About/About.styles'
import { ContentContainer, GrayFade, ServicesContainer, Wrapper } from './Services.styles'

type ServicesType = StrapiArrayType<ServiceType>

export const Services = () => {
  const [services, setServices] = useState<ServicesType['data']>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getServices = async () => {
    try {
      setLoading(true)
      const response = await axios.get<ServicesType>(`${import.meta.env.VITE_STRAPI_URL}/api/services?populate=*`)
      setServices(response.data.data)
      setLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
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
            <LoadingContainer>
              {loading && <LoadingSpinner />}
              {error && <p>Proszę odśwież stronę... Nie udało się pobrać danych.</p>}
            </LoadingContainer>
            {services.map(service => <ServiceCard key={service.id} service={service.attributes} />)}
          </ServicesContainer>
        </ContentContainer>
      </Wrapper>
      <GrayFade />
    </div>
  )
}
