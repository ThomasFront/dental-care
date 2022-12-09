import styled from "styled-components";

export const Wrapper = styled.button`
  margin-bottom: 40px;
  background-color: #02adbe;
  color: white;
  padding: 8px 12px;
  font-weight: 300;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: transform 0.2s, background-color 0.2s;

  @media (min-width: 768px){
    margin-bottom: 0;
    margin-left: 10px;
  }

  @media (min-width: 1024px){
    font-size: 17px;
  }
  
  &:hover {
      transform: scale(1.03);
      background-color: rgb(2, 188, 207);
  }
`