import styled from "styled-components";
import { HiBars3BottomRight } from 'react-icons/hi2'
import { FaTooth } from 'react-icons/fa'

export const Nav  = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  /* background-color: #eeeeee; */
  box-shadow: 0 0 10px gray;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0 20px;
`

export const DesktopItemWrapper = styled.div`
  display: none;
  
  @media (min-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const BurgerWrapper = styled.div`

  @media (min-width: 768px){
    display: none;
  }
`

export const BurgerIcon = styled(HiBars3BottomRight)`
  font-size: 40px;
  padding: 5px;
  cursor: pointer;
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;

  span {
    color: #02adbe;
  }
`

export const ToothIcon = styled(FaTooth)`
  color: #02adbe;
`