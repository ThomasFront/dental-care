import styled, { css } from "styled-components";
import { AiOutlineArrowDown } from 'react-icons/ai'

type AnswerContainerProps = {
  showAnswer?: boolean
}

type ArrowIconProps = {
  rotateArrow?: boolean
}

type QuestionContainerProps = {
  isActive?: boolean
}

export const Wrapper = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 400px;
  background-color: #f2f2f2;
  text-align: center;

  @media (min-width: 768px){
    min-width: 500px;
  }

  @media (min-width: 1200px){
    max-width: 600px;
  }

  h3 {
    font-size: 12px;
    text-align: left;

    @media (min-width: 414px){
      font-size: 14px;
    }

    @media (min-width: 576px){
      font-size: 18px;
    }
  }
  
  p {
    font-size: 12px;
    padding-top: 10px;
    text-align: left;

    @media (min-width: 576px){
      font-size: 14px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 16px;
  }
`

export const ArrowIcon = styled(AiOutlineArrowDown)<ArrowIconProps>`
  color: #02adbe;
  transition: transform 0.2s;
  cursor: pointer;
  
  @media (min-width: 576px){
    font-size: 22px;
  }
  
  ${({rotateArrow}) => rotateArrow && css`
    transform: rotate(180deg);
  `}
`

export const QuestionContainer = styled.div<QuestionContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  ${({isActive}) => isActive && css`
    background-color: rgb(250, 250, 250);
  `}

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`

export const AnswerContainer = styled.div<AnswerContainerProps>`
  background-color: #eeeeee;
  height: 0px;
  overflow: hidden;
  padding: 0 10px;
  transition: height 0.2s;

  ${({showAnswer}) => showAnswer && css`
    height: 60px;
  `}

  p {
    text-align: left;
  }
`