import styled from "styled-components";
import { Link } from 'react-scroll'

export const LinkItem = styled(Link)`
  position: relative;
  margin: 6px 0;
  padding: 16px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
      color: #02adbe;
    }
`