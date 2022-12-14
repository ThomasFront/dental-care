import styled from "styled-components";
import { TbBuildingSkyscraper, TbPhone } from 'react-icons/tb'
import { motion } from "framer-motion";

export const Section = styled.section`
  
`

export const ContentWrapper = styled(motion.div)`
  margin: 60px 10px;
  background-color: #f2f2f2;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  max-width: 500px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;

  @media (min-width: 992px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  padding: 20px;

  >p{
    margin: 171px 0;
    color: green;
    font-weight: bold;

    @media (min-width: 576px){
      font-size: 16px;
    }
  }

  @media (min-width: 992px){
    width: 50%;
  }
`

export const FormTitle = styled.div`
  h2 {
    font-size: 18px;
    color: #02adbe;
    margin-bottom: 2px;

    @media (min-width: 992px){
      font-size: 24px;
    }
  }

  p {
    font-size: 15px;
    font-weight: 300;

    @media (min-width: 992px){
      font-size: 17px;
    }
  }
`

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 20px;

  p {
      color: crimson;
      font-size: 12px;
      margin-bottom: 10px;
      text-align: center;
  }

  input, textarea {
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    padding: 10px;
    border: 1px solid #02adbe;
    border-radius: 6px;

    @media (min-width: 992px){
      padding: 16px 8px;
    }
  }

  input:focus, textarea:focus {
    outline: 1px solid #02adbe;
    background-color: #eeeeee;
  }


  textarea {
    resize: none;
    min-height: 100px;
  }

  button {
    margin: 20px 0;
    background-color: #02adbe;
    padding: 10px 20px;
    border-radius: 6px;
    color: white;
    border: none;
    width: 100%;
    transition: transform 0.2s, background-color 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
      background-color: rgb(2, 188, 207);
    }

    @media (min-width: 992px){
      margin: 40px 0 20px;
    }
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MapDesktopWrapper = styled.div`
  display: none;

  @media(min-width: 992px){
    display: block;
    width: 50%;
    padding: 20px;
  }
`

export const MapMobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px){
    display: none;
  }
`

export const PhoneIcon = styled(TbPhone)`
  color: #02adbe;
  font-size: 16px;
`

export const SkyscraperIcon = styled(TbBuildingSkyscraper)`
  color: #02adbe;
  font-size: 16px;
`

export const ContactInfoWrapper = styled.div`
  margin-bottom: 20px;
  
  @media (min-width: 768px){
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`