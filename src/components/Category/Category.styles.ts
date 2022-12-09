import styled, { css } from "styled-components";

type ButtonItemProps = {
  isSelected: boolean
}

export const ButtonItem = styled.button<ButtonItemProps>`
  margin: 0 5px;
  background-color: #02adbe;
  color: white;
  font-weight: 300;
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  ${({isSelected}) => isSelected && css`
      transform: scale(1.07);
      background-color: rgb(2, 188, 207);
  `}
  
  &:hover {
      transform: scale(1.03);
      background-color: rgb(2, 188, 207);
  }

  @media (min-width: 768px){
    font-size: 16px;
  }
`