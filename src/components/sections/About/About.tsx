import { SectionTitle } from '../../SectionTitle'
import { TextWrapper } from '../../TextWrapper'
import { Container, DoctorsList, LinkItem, LoadingContainer, Section, Text, TextContainer } from './About.styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../../../utils';
import { Doctor } from '../../Doctor';
import { DecorativeBg } from '../../DecorativeBg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StrapiDoctorsType } from '../../../types/strapi';
import { LoadingSpinner } from '../../LoadingSpinner';

export const About = () => {
  const [doctors, setDoctors] = useState<StrapiDoctorsType['data']>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getDoctors = async () => {
    try {
      setLoading(true)
      const response = await axios.get<StrapiDoctorsType>(`${import.meta.env.VITE_STRAPI_URL}/api/doctors?populate=*`)
      setDoctors(response.data.data)
      setLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    getDoctors()
  }, [])

  return (
    <>
      <TextWrapper>
        <Section id='about'>
          <SectionTitle>O nas</SectionTitle>
          <Container>
            <TextContainer
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <strong>Nowoczesny oraz przyjazny gabinet stomatologiczny w Warszawie.</strong>
              <Text>Gabinet tworzony z pasją i oddaniem. Chcemy aby nasi wszyscy pacjenci czuli, że zależy nam na ich dobru. Cechuje nas dobra atmosfera - pacjenci często nas polecają nie tylko ze względu na profesjonalne leczenie...</Text>
              <Text>Do każdego klienta podchodzimy w sposób indywidualny, kompleksowo wykonujemy wszystkie zabiegi z zakresu stomatologii. Nie czekaj i sprawdź naszą pełną <LinkItem to="services" spy={true} smooth={true} offset={-60} duration={500}>oferte</LinkItem>.</Text>
              <Text>Gwarantujemy, że przy ścisłej współpracy, na końcu tej drogi, będziesz się szeroko i promiennie uśmiechać - <LinkItem to="contact" spy={true} smooth={true} offset={-60} duration={500}>skontaktuj</LinkItem> się z nami już dziś!</Text>
            </TextContainer>
          </Container>
          <DoctorsList>
            <LoadingContainer>
              {loading && <LoadingSpinner />}
              {error && <p>Proszę odśwież stronę... Nie udało się pobrać danych.</p>}
            </LoadingContainer>
            <Slider {...settings}>
              {doctors.map(person => <Doctor doctor={person.attributes} id={person.id} key={person.id} />)}
            </Slider>
          </DoctorsList>
        </Section>
      </TextWrapper>
    </>
  )
}
