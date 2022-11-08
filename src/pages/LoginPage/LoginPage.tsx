import React from 'react'
import { FormContainer } from '../../components/FormContainer'
import { PageWrapper } from '../../components/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper'
import { ContentWrapper, DecorativePerson, LinkItem, PersonIcon, Wrapper } from './LoginPage.styles'

export const LoginPage = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          <FormContainer>
            <DecorativePerson>
              <PersonIcon />
            </DecorativePerson>
            <h1>Zaloguj się</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Hasło' />
            <button>Zaloguj</button>
            <ContentWrapper>
              <p>Nie masz konta? <LinkItem to="/register">Zarejestruj</LinkItem> się!</p>
            </ContentWrapper>
          </FormContainer>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
