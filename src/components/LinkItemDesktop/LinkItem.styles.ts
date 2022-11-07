import styled from "styled-components";
import { Link } from 'react-scroll'

export const Item = styled(Link)`
  display: none;
  
  @media (min-width: 768px){
    position: relative;
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