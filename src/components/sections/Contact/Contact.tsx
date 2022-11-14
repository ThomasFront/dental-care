import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SectionTitle } from '../../SectionTitle'
import { TextWrapper } from '../../TextWrapper'
import { ContactInfoWrapper, ContentWrapper, FormContainer, FormTitle, FormWrapper, MapDesktopWrapper, MapMobileWrapper, PhoneIcon, Section, SectionWrapper, SkyscraperIcon } from './Contact.styles'
import ContactSvg from '/assets/contact-svg.svg'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { MapDesktop } from '../../MapDesktop'
import { MapMobile } from '../../MapMobile'

type Inputs = {
  name: string,
  email: string,
  contents: string
};

export const Contact = () => {
  const [confirmSending, setConfirmSending] = useState(false)

  const schema = yup.object().shape({
    name: yup.string().required('Imie jest wymagane'),
    email: yup.string().email('Wprowadź prawidłowy schemat email').required('Email jest wymagany'),
    contents: yup.string().required('Treść jest wymagana')
  })

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setConfirmSending(true)
  }


  return (
    <Section id='contact'>
      <SectionTitle>Kontakt</SectionTitle>
      <TextWrapper>
        <SectionWrapper>
          <ContentWrapper>
            <FormContainer>
              <FormTitle>
                <ContactInfoWrapper>
                  <h3><SkyscraperIcon /> Warszawa, ul. Łącka 3</h3>
                  <h3><PhoneIcon /> +48 123 456 789</h3>
                </ContactInfoWrapper>
                <h2>Pozostańmy w kontakcie!</h2>
                <p>Jak możemy Ci pomóc?</p>
              </FormTitle>
              {confirmSending ?
                <p>Wiadomość została wysłana. Skontaktujemy się w ciągu 24h.</p> :
                <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder='Wpisz swoje imie'
                    {...register("name")}
                  />
                  <p>{errors.name?.message}</p>
                  <input
                    type="email"
                    placeholder='Wpisz swój adres email'
                    {...register("email")}
                  />
                  <p>{errors.email?.message}</p>
                  <textarea
                    placeholder='Wpisz treść swojego pytania'
                    {...register("contents")}
                  />
                  <p>{errors.contents?.message}</p>
                  <button>Wyślij</button>
                </FormWrapper>
              }
            </FormContainer>
            <MapDesktopWrapper>
              <MapMobile/>
            </MapDesktopWrapper>
          </ContentWrapper>
        </SectionWrapper>
      </TextWrapper>
      <MapMobileWrapper>
        <MapDesktop />
      </MapMobileWrapper>
    </Section>
  )
}
