import { SectionTitle } from '../../SectionTitle'
import { TextWrapper } from '../../TextWrapper'
import { Container, DoctorsList, Section, Text, TextContainer } from './About.styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../../../utils';
import { Doctor } from '../../Doctor';
import { DecorativeBg } from '../../DecorativeBg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StrapiDoctorsType } from '../../../types/strapi';

export const About = () => {
  const [doctors, setDoctors] = useState<StrapiDoctorsType['data']>([])

  const getDoctors = async () => {
    const response = await axios.get<StrapiDoctorsType>(`${import.meta.env.VITE_STRAPI_URL}/api/doctors?populate=*`)
    setDoctors(response.data.data)
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
              <Text>Do każdego klienta podchodzimy w sposób indywidualny, kompleksowo wykonujemy wszystkie zabiegi z zakresu stomatologii. Nie czekaj i sprawdź naszą pełną <button>oferte</button>.</Text>
              <Text>Gwarantujemy, że przy ścisłej współpracy, na końcu tej drogi, będziesz się szeroko i promiennie uśmiechać - <button>skontaktuj</button> się z nami już dziś!</Text>
            </TextContainer>
          </Container>
          <DoctorsList>
            <Slider {...settings}>
              {doctors.map(person => <Doctor doctor={person.attributes} id={person.id} key={person.id} />)}
            </Slider>
          </DoctorsList>
        </Section>
      </TextWrapper>
      <DecorativeBg />
    </>
  )
}
