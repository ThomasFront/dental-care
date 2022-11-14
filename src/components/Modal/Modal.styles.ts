import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
`

export const Container = styled(motion.div)`
  background-color: white;
  width: 100%;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
  border-radius: 6px;
  max-width: 400px;

  h2 {
    font-size: 16px;
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 5px;
    font-weight: 300;
  }
  
  span {
    font-weight: bold;
  }
`