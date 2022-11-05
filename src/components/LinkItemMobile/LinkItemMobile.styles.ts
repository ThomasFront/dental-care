import styled from "styled-components";

export const LinkItem = styled.a`
  position: relative;
  margin: 6px 0;
  padding: 16px;
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
`