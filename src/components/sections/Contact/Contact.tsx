import React from 'react'
import { SectionTitle } from '../../SectionTitle'
import { TextWrapper } from '../../TextWrapper'
import { ContentWrapper, FormContainer, FormTitle, FormWrapper, ImageWrapper, Section, SectionWrapper } from './Contact.styles'
import ContactSvg from '/assets/contact-svg.svg'

export const Contact = () => {
  return (
    <Section>
      <SectionTitle>Kontakt</SectionTitle>
      <TextWrapper>
        <SectionWrapper>
          <ContentWrapper>
            <FormContainer>
              <FormTitle>
                <h2>Pozostańmy w kontakcie!</h2>
                <p>Jak możemy Ci pomóc?</p>
              </FormTitle>
              <FormWrapper>
                <input type="text" placeholder='Wpisz swoje imie' />
                <input type="email" placeholder='Wpisz swój adres email' />
                <textarea placeholder='Wpisz treść swojego pytania'></textarea>
                <button>Wyślij</button>
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
