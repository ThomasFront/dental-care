import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TitleBox = styled.div`
  margin-bottom: 20px;

  p {
    text-align: center;
    color: #02adbe;
  }
`

export const SelectsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

  select{
    padding: 5px 10px;
    border-radius: 6px;
  }
`

export const Subtitled = styled.p`
  margin: 10px 0;
  text-align: center;
`

export const CalendarWrapper = styled.div`
  max-width: 260px;
  padding: 0 5px;

  @media (min-width: 375px){
    max-width: 340px;
  }

  @media (min-width: 768px){
    max-width: 500px;
  }
`

export const AddVisitBtn = styled.button`
  margin: 20px 0 10px;
  border-radius: 6px;
  border: none;
  background-color: #02adbe;
  padding: 8px 16px;
  width: 60%;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  
  &:hover {
      transform: scale(1.03);
      background-color: rgb(2, 188, 207);
  }
`
