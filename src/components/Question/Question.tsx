import { useState } from 'react'
import { AnswerContainer, ArrowIconWrapper, QuestionContainer, Wrapper } from './Question.styles'
import { AiOutlineArrowDown } from 'react-icons/ai'

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
          <ArrowIconWrapper rotateArrow={showAnswer}>
            <AiOutlineArrowDown />
          </ArrowIconWrapper>
        </button>
      </QuestionContainer>
      <AnswerContainer showAnswer={showAnswer}>
        <p>{answer}</p>
      </AnswerContainer>
    </Wrapper>
  )
}
