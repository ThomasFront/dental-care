import { Link } from 'react-scroll'
import styled from "styled-components";


export const Item = styled.button`
  display: none;
  text-decoration: none;
  color: black;
  border: none;
  background-color: transparent;

  &.active {
    color: #02adbe;
  }
  
  @media (min-width: 768px){
    position: relative;
    display: block;
    margin: 0 12px;
    padding: 5px;
    cursor: pointer;
    transition: color 0.2s;
    font-size: 14px;

    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #02adbe;
      transform: scaleX(0);
      transition: transform 0.2s;
    }

    &:hover::before {
      transform: scale(1);
    }
    
    &:hover {
      color: #02adbe;
    }
  }

  @media (min-width: 992px) {
    padding: 8px;
    font-size: 16px;
  }
`