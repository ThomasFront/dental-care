import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 60px 10px;
`

export const Container = styled.div`
  margin-top: 60px;
`

export const QuestionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);

`

export const InformationsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    display: none;

    @media (min-width: 992px){
      display: block;
      width: 40%;
    }
  }
`