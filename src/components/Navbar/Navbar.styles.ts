import styled, { css } from "styled-components";
import { HiBars3BottomRight } from 'react-icons/hi2'
import { FaTooth } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import { Link } from "react-router-dom";
import { BiLogOutCircle } from 'react-icons/bi'

type NavMobileProps = {
  showMobileMenu?: boolean
}

type NavProps = {
  showNav: boolean
}

export const LogoutIcon = styled(BiLogOutCircle)`
  font-size: 20px;
`

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  color: white;
  background-color: rgb(194, 40, 19);
  padding: 8px 16px;
  font-weight: 300;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: transform 0.2s, background-color 0.2s;
  font-size: 14px;
  padding: 8px 12px;

  @media (min-width: 768px){
    margin-bottom: 0;
    padding: 4px 8px;
  }

  @media (min-width: 1024px){
    margin-left: 10px;
    font-size: 17px;
    padding: 8px 12px;
  }
  
  &:hover {
      transform: scale(1.03);
      background-color: crimson;
  }
`

export const Nav  = styled.nav<NavProps>`
  z-index: 100;
  position: fixed;
  top: -60px;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(220, 220, 220);
  transition: top 0.2s ease-in-out;
  ${({showNav}) => showNav && css`
    top: 0px;
  `}

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

  button {
    background-color: transparent;
    border: none;
  }

  @media (min-width: 768px){
    display: none;
  }
`

export const BurgerIcon = styled(HiBars3BottomRight)`
  font-size: 40px;
  padding: 5px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #02adbe;
  }
`

export const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  span {
    color: #02adbe;
  }
`

export const ToothIcon = styled(FaTooth)`
  color: #02adbe;
  margin-right: 2px;
`

export const NavMobile = styled.nav<NavMobileProps>`
  z-index: 90;
  position: fixed;
  top: 0;
  left: 102%;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  transition: left 0.3s;

  ${({showMobileMenu}) => showMobileMenu && css`
    left: 0;
  `}

  @media (min-width: 768px) {
    display: none
  }
`

export const NavMobileItems = styled.div`
  z-index: 200;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

export const NavMobileCloseIcon = styled(MdOutlineCancel)`
  padding: 5px;
  font-size: 40px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #02adbe;
  }
`
