import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { TextWrapper } from '../../components/TextWrapper'
import { StrapiDoctorType } from '../../types/strapi'
import { Container, DecorativeCircle, DescriptionsText, DoctorContainer, FbIcon, InfoContainer, InfoSvg, LinkedIcon, MiddleContainer, SocialMediaWrapper, Title, TwitterIcon, Wrapper } from './DoctorPage.styles'

export const DoctorPage = () => {
  const [doctor, setDoctor] = useState<StrapiDoctorType['data']['attributes'] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { id } = useParams()
  const image = doctor?.Avatar.data.attributes.url

  const getDoctor = async () => {
    try {
      const response = await axios.get<StrapiDoctorType>(`${import.meta.env.VITE_STRAPI_URL}/api/doctors/${id}?populate=*`)
      setDoctor(response.data.data.attributes)
      setLoading(false)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    getDoctor()
  }, [])

  return (
    <Wrapper>
      <TextWrapper>
        <MiddleContainer>
          {error && <p>Ładowanie nie powiodło się... Spróbuj ponownie.</p>}
          {loading ?
            <LoadingSpinner />
            :
            <Container
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <InfoSvg />
              <DoctorContainer>
                <h2>{doctor?.Name}</h2>
                <img src={`${image}`} alt={`Zdjęcie przedstawiające ${doctor?.Name}`} />
                <DecorativeCircle />
              </DoctorContainer>
              <InfoContainer>
                <Title>Główne informacje:</Title>
                <DescriptionsText>{doctor?.Description}</DescriptionsText>
                <Title>Dodatkowe informacje:</Title>
                <DescriptionsText>{doctor?.AdditionalInfo}</DescriptionsText>
                <Title>Bezpośredni kontakt:</Title>
                <SocialMediaWrapper>
                  <a href="#"><FbIcon /></a>
                  <a href="#"><TwitterIcon /></a>
                  <a href="#"><LinkedIcon /></a>
                </SocialMediaWrapper>
              </InfoContainer>
            </Container>
          }
        </MiddleContainer>
      </TextWrapper>
    </Wrapper>
  )
}
