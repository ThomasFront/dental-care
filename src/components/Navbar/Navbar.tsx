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
            <LogoWrapper onClick={() => setOpenNavMobile(false)}>
              <p><ToothIcon /> Dental<span>Care</span>.</p>
            </LogoWrapper>
            <BurgerWrapper>
              {openNavMobile ?
                <NavMobileCloseIcon onClick={() => setOpenNavMobile(prev => !prev)} />
                :
                <BurgerIcon onClick={() => setOpenNavMobile(prev => !prev)} />
              }
            </BurgerWrapper>
            <DesktopItemWrapper>
              {linkItems.map(item => <LinkItemDesktop item={item} />)}
            </DesktopItemWrapper>
          </Wrapper>
        </TextWrapper>
      </NavDesktop>
      <NavMobile showMobileMenu={openNavMobile}>
        <NavMobileItems>
          {linkItems.map(item => <LinkItemMobile item={item} />)}
        </NavMobileItems>
      </NavMobile>
    </>
  )
}
