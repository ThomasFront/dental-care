import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SectionTitle } from '../../SectionTitle'
import { TextWrapper } from '../../TextWrapper'
import { ContentWrapper, FormContainer, FormTitle, FormWrapper, ImageWrapper, MessageText, Section, SectionWrapper } from './Contact.styles'
import ContactSvg from '/assets/contact-svg.svg'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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
                <h2>Pozostańmy w kontakcie!</h2>
                <p>Jak możemy Ci pomóc?</p>
              </FormTitle>
              <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                {confirmSending ?
                  <MessageText>Wiadomość została wysłana. Skontaktujemy się w ciągu 24h.</MessageText> :
                  <>
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
                  </>
                }
              </FormWrapper>
            </FormContainer>
            <ImageWrapper>
              <img src={ContactSvg} alt="" />
            </ImageWrapper>
          </ContentWrapper>
        </SectionWrapper>
      </TextWrapper>
    </Section>
  )
}
