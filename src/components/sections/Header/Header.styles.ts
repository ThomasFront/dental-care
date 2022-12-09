import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  height: 95vh;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Shadow = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;

  @media (min-width: 576px){
    min-width: 400px;
  }

  h1 {
    font-size: 25px;
    text-align: center;
    color: #ffffff;

  @media (min-width: 576px){
    font-size: 28px;
  }

  @media (min-width: 768px){
    font-size: 33px;
  }

  }

  h2 {
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    font-weight: lighter;

    span{
      color: #02adbe;
      font-weight: 300;
    }

  @media (min-width: 576px){
    font-size: 22px;
  }

  @media (min-width: 768px){
    font-size: 26px;
  }
  }

  button {
    margin: 20px auto 0;
    padding: 6px 12px;
    color: white;
    font-weight: 300;
    background-color: #02adbe;
    border: none;
    border-radius: 6px;
    transition: transform 0.2s, background-color 0.2s;
    cursor: pointer;

  @media (min-width: 576px){
    font-size: 16px;
    padding: 8px 12px;
  }

  @media (min-width: 768px){
    font-size: 18px;
  }

    &:hover {
      transform: scale(1.03);
      background-color: rgb(2, 188, 207);
    }
  }
`

export const ContainWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`