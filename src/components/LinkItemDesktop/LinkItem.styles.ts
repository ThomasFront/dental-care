import styled from "styled-components";

export const Item = styled.a`
  display: none;
  
  @media (min-width: 768px){
    position: relative;
    display: block;
    margin: 0 12px;
    padding: 5px;
    cursor: pointer;
    transition: color 0.2s;

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
  }
`