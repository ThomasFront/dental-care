import styled from "styled-components";

export const Wrapper = styled.button`
  margin-bottom: 40px;
  background-color: #02adbe;
  padding: 5px 10px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  transition: transform 0.2s, background-color 0.2s;

  @media (min-width: 768px){
    margin-bottom: 0;
  }

  @media (min-width: 1024px){
    margin-left: 40px;
  }
  
  &:hover {
      transform: scale(1.03);
      background-color: rgb(2, 188, 207);
  }
`