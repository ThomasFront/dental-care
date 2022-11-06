import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  width: 49%;

  @media (min-width: 576px){
    width: 25%;
  }
  
  p {
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    
    @media (min-width: 350px){
      font-size: 14px;
    }

    @media (min-width: 576px){
      font-size: 12px;
    }

    @media (min-width: 700px){
      font-size: 18px;
    }
  }

  h2 {
    margin: 10px 0;
    font-size: 24px;

    @media (min-width: 576px){
      font-size: 30px;
    }
  }
  `

  export const ImgWrapper = styled.div`
    display: flex;
    padding: 8px;
    border-radius: 50%;
    background: #ffffff;
  `