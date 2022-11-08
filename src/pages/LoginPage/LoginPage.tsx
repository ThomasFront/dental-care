import React from 'react'
import { PageWrapper } from '../../components/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper'
import { Container, ContentWrapper, DecorativePerson, PersonIcon, Wrapper } from './LoginPage.styles'

export const LoginPage = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          <Container>
            <DecorativePerson>
              <PersonIcon/>
            </DecorativePerson>
            <h1>Zaloguj się</h1>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Hasło'/>
            <button>Zaloguj</button>
            <ContentWrapper>
            <p>Nie masz konta? <button>Zarejestruj</button> się!</p>
            </ContentWrapper>
          </Container>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
