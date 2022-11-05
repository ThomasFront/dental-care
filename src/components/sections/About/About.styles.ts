import styled from "styled-components";

export const Section = styled.section`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextContainer = styled.div`
  margin-top: 20px;
  padding: 0 20px;
  text-align: center;

  strong {
    font-size: 20px;

    @media (min-width: 576px){
      font-size: 22px;
    }
  }
  
  button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #02adbe;
    font-weight: bold;
    position: relative;
    cursor: pointer;

    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #02adbe;
      transform: scale(0);
      transition: transform 0.2s;

      @media (min-width: 576px){
        height: 2px;
      }
    }

    &:hover::before {
      transform: scale(1);
    }

    @media (min-width: 576px){
      font-size: 18px;
    }
  }
`

export const Text = styled.p`
  margin: 10px;

  @media (min-width: 576px){
    font-size: 18px;
  }
`

export const DoctorsList = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 20px;
`