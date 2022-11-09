import styled from "styled-components";

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