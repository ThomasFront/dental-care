import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
`

export const ContentWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p{
    margin: 20px;
  }
`

export const LinkItem = styled(Link)`
    margin-bottom: 40px;
    background-color: #02adbe;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    color: black;
    box-shadow: 0 0 15px rgba(50, 50, 50, 0.3);
    transition: transform 0.2s, background-color 0.2s;

    &:hover {
      transform: scale(1.03);
      background-color: rgb(2, 188, 207);
    }
`