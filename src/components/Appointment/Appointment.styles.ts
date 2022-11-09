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
  select{
    padding: 5px 10px;
    border-radius: 6px;
  }
`

export const Subtitled = styled.p`
  margin: 10px 0;
  text-align: center;
`