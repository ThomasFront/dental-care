import styled from "styled-components";

export const Item = styled.a`
  display: none;
  
  @media (min-width: 768px){
    display: block;
    margin: 0 12px;
    padding: 5px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #02adbe;
    }
  }

  @media (min-width: 992px) {
    padding: 8px;
  }
`