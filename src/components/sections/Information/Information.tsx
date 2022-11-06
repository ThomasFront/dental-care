import React from 'react'
import { questions } from '../../../utils'
import { Question } from '../../Question'
import { SectionTitle } from '../../SectionTitle'
import { TextWrapper } from '../../TextWrapper'
import { Container, InformationsWrapper, QuestionsContainer, Wrapper } from './Information.styles'
import informationPicture from '/assets/information-picture.svg'

export const Information = () => {
  return (
    <Wrapper>
      <SectionTitle>Informacje</SectionTitle>
      <Container>
        <TextWrapper>
          <InformationsWrapper>
            <QuestionsContainer>
              {questions.map(item => <Question key={item.id} item={item} />)}
            </QuestionsContainer>
            <img src={informationPicture} alt="Dekoracyjna ilustracja przedstawiająca stomatologów" />
          </InformationsWrapper>
        </TextWrapper>
      </Container>
    </Wrapper>
  )
}
