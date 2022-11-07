import React, { useState } from 'react'
import { linkItems } from '../../utils'
import { LinkItemDesktop } from '../LinkItemDesktop'
import { LinkItemMobile } from '../LinkItemMobile'
import { TextWrapper } from '../TextWrapper'
import { BurgerIcon, BurgerWrapper, DesktopItemWrapper, LogoWrapper, Nav as NavDesktop, NavMobile, NavMobileCloseIcon, NavMobileItems, ToothIcon, Wrapper } from './Navbar.styles'

export const Navbar = () => {
  const [openNavMobile, setOpenNavMobile] = useState(false)

  return (
    <>
      <NavDesktop>
        <TextWrapper>
          <Wrapper>
            <LogoWrapper
              to='home'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setOpenNavMobile(false)}
            >
              <ToothIcon />
              <p>Dental<span>Care</span>.</p>
            </LogoWrapper>
            <BurgerWrapper>
              {openNavMobile ?
                <button><NavMobileCloseIcon onClick={() => setOpenNavMobile(prev => !prev)} /></button>
                :
                <button><BurgerIcon onClick={() => setOpenNavMobile(prev => !prev)} /></button>
              }
            </BurgerWrapper>
            <DesktopItemWrapper>
              {linkItems.map((item, index) => <LinkItemDesktop item={item} key={index} />)}
            </DesktopItemWrapper>
          </Wrapper>
        </TextWrapper>
      </NavDesktop>
      <NavMobile showMobileMenu={openNavMobile}>
        <NavMobileItems>
          {linkItems.map((item, index) => <LinkItemMobile item={item} key={index} setOpenNavMobile={setOpenNavMobile} />)}
        </NavMobileItems>
      </NavMobile>
    </>
  )
}
