import { useState } from 'react'
import { AnswerContainer, ArrowIcon, QuestionContainer, Wrapper } from './Question.styles'

type QuestionType = {
  item: {
    id: number,
    question: string,
    answer: string
  }
}

export const Question = ({ item }: QuestionType) => {
  const { question, answer } = item
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <Wrapper>
      <QuestionContainer onClick={() => setShowAnswer(prev => !prev)} isActive={showAnswer}>
        <h3>{question}</h3>
        <button>
          <ArrowIcon rotateArrow={showAnswer} />
        </button>
      </QuestionContainer>
      <AnswerContainer showAnswer={showAnswer}>
        <p>{answer}</p>
      </AnswerContainer>
    </Wrapper>
  )
}
