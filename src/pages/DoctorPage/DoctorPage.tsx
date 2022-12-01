import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TextWrapper } from '../../components/TextWrapper'
import { StrapiDoctorType } from '../../types/strapi'
import { Container, DecorativeCircle, DescriptionsText, DoctorContainer, FbIcon, InfoContainer, InfoSvg, LinkedIcon, MiddleContainer, SocialMediaWrapper, Title, TwitterIcon, Wrapper } from './DoctorPage.styles'

export const DoctorPage = () => {
  const [doctor, setDoctor] = useState<StrapiDoctorType['data']['attributes'] | null>(null)
  const { id } = useParams()
  const image = doctor?.Avatar.data.attributes.url

  const getDoctor = async () => {
    const response = await axios.get<StrapiDoctorType>(`${import.meta.env.VITE_STRAPI_URL}/api/doctors/${id}?populate=*`)
    setDoctor(response.data.data.attributes)
  }

  useEffect(() => {
    getDoctor()
  }, [])

  return (
    <Wrapper>
      <TextWrapper>
        <MiddleContainer>
          <Container
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <InfoSvg />
            <DoctorContainer>
              <h2>{doctor?.Name}</h2>
              <img src={`${import.meta.env.VITE_STRAPI_URL}${image}`} alt={`Zdjęcie przedstawiające ${doctor?.Name}`} />
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
        </MiddleContainer>
      </TextWrapper>
    </Wrapper>
  )
}
