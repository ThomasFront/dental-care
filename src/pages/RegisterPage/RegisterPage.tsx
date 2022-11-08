import React from 'react'
import { FormContainer } from '../../components/FormContainer'
import { PageWrapper } from '../../components/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper'
import { ContentWrapper, DecorativePerson, LinkItem, PersonIcon, Wrapper } from './RegisterPage.styles'

export const RegisterPage = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          <FormContainer>
            <DecorativePerson>
              <PersonIcon />
            </DecorativePerson>
            <h1>Zarejestruj się</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Hasło' />
            <button>Zarejestruj</button>
            <ContentWrapper>
              <p>Masz już konto? <LinkItem to="/login">Zaloguj</LinkItem> się!</p>
            </ContentWrapper>
          </FormContainer>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
