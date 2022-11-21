import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 150px;
  min-height: 100vh;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;

    @media (min-width: 375px){
      height: 300px;
      width: 300px;
    }

    
    @media (min-width: 768px){
      margin-right:  60px;
    }
  }
`

export const DoctorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;

  @media (min-width: 768px){
    flex-direction: row;
  }
` 

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  max-width: 400px;
  background-color: #02adbe;
  border-radius: 6px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);

  h2 {
    margin: 15px 0 25px;

    @media (min-width: 375px){
      font-size: 28px;
    }
  }

  h3 {
    margin: 10px 0;
  }

  p {

    @media (min-width: 375px){
      font-size: 18px;
    }
  }
`