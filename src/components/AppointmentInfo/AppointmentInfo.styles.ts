import styled, { css } from "styled-components";

type ModalBtnProps = {
  confirm?: boolean
}

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid #02adbe;

  div{
    width: 25%;
  }

  p {
    text-align: center;
    margin: 0 10px;
    font-size: 8px;

    @media (min-width: 320px){
      font-size: 9px;
    }

    @media (min-width: 414px){
      font-size: 11px;
    }

    @media (min-width: 768px){
      font-size: 12px;
    }

}

  button {
    border: none;
    background-color: rgb(219, 72, 72);
    border-radius: 6px;
    padding: 2px 4px;
    cursor: pointer;
    font-size: 8px;
    transition: background-color 0.2s, transform 0.2s;
    
    @media (min-width: 414px){
      font-size: 12px;
    }

    @media (min-width: 768px){
      padding: 5px 10px;
      font-size: 12px;
    }

    &:hover {
      background-color: rgb(227, 34, 34);
      transform: scale(1.04);
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBtn = styled.button<ModalBtnProps>`
    border: none;
    padding: 8px 16px;
    background-color: gray;
    box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
    cursor: pointer;
    border-radius: 6px;
    transition: transform 0.2s, background-color 0.2s;
    margin: 5px 10px;

    &:hover {
        transform: scale(1.03);
        background-color: silver;
    }

    ${({confirm}) => confirm && css`
      background-color: #02adbe;

      &:hover {
        background-color: rgb(2, 188, 207);
      }
    `}
    
`