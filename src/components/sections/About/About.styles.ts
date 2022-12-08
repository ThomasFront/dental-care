import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 60px;
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
  margin-top: 40px;
`

export const TextContainer = styled(motion.div)`
  margin-top: 20px;
  padding: 0 20px;
  text-align: center;

  strong {
    font-size: 20px;

    @media (min-width: 576px){
      font-size: 22px;
    }
  }
`

export const LinkItem = styled(Link)`
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
  min-height: 450px;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  p {
    padding-top: 80px;
    color: crimson;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`