import styled, { css } from "styled-components";

type ButtonModalProps = {
  confirm?: boolean
}

export const Wrapper = styled.div`

`

export const TitleBox = styled.div`
  margin-bottom: 20px;
  
  p {
    text-align: center;
    color: #02adbe;
  }
`

export const InformationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-weight: bold;
  }

  button {
    margin-top: 20px;
    border: none;
    background-color: rgb(230, 60, 60);
    padding: 4px 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: rgb(222, 38, 38);
      transform: scale(1.04);
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;    
`

export const ButtonModal = styled.button<ButtonModalProps>`
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

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  button {
    background-color: gray;
    color: white;

    &:hover {
      background-color: black;
    }
  }
`

export const ErrorMessage = styled.p`
  color: crimson;
`