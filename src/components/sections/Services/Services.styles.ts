import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #f2f2f2;
`

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  @media (min-width: 576px){
    flex-direction: row;
    flex-wrap: wrap; 
  }
`

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`

export const GrayFade = styled.div`
  height: 200px;
  background: rgb(242,242,242);
  background: linear-gradient(180deg, rgba(242,242,242,1) 0%, rgba(255,255,255,0.35898109243697474) 57%);
`