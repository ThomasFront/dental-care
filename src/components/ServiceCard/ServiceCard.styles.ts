import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 15px 60px;
  padding: 10px;
  width: 250px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2%);
  }

  @media (min-width: 1024px){
    width: 30%;
    padding: 20px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #02adbe;
  width: 100px;
  height: 100px;
  top: -40px;
  border-radius: 6px;
  padding: 5px;
`

export const TextContainer = styled.div`
  text-align: center;
  height: 55%;

  h2 {
    margin-bottom: 30px;
    font-size: 18px;
  }

`