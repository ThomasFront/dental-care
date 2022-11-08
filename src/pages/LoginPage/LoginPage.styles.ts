import styled from "styled-components";
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #02adbe;
  min-height: 100vh;
`



export const ContentWrapper = styled.div`

  p {
    text-align: center;
    font-size: 14px;

    @media (min-width: 768px){
      font-size: 17px;
    }
  }
`

export const LinkItem = styled(Link)`
    position: relative;
    font-size: 14px;
    color: #02adbe;
    font-weight: bold;
    border: none;
    background-color: transparent;
    padding: 0px;
    text-decoration: none;
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
    }

    &:hover::before {
      transform: scale(1);
    }

    &:hover {
      transform: scale(1);
      background-color: transparent;
    }
    @media (min-width: 768px){
      font-size: 17px;
    }
`

export const DecorativePerson = styled.div`
  position: absolute;
  top: -60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 80px;
  width: 80px;
`

export const PersonIcon = styled(BsFillPersonFill)`
  font-size: 70px;
`