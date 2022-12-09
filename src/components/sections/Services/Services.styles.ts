import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
`

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  min-height: 720px;

  @media (min-width: 576px){
    flex-direction: row;
    flex-wrap: wrap; 
  }

  @media (max-width: 575px){
    min-height: 2160px;
  }

  @media (max-width: 840px){
    min-height: 1080px;
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