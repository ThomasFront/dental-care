import React from 'react'
import { linkItems } from '../../utils'
import { LinkItem } from '../LinkItem'
import { TextWrapper } from '../TextWrapper'
import { BurgerIcon, BurgerWrapper, DesktopItemWrapper, LogoWrapper, Nav, ToothIcon, Wrapper } from './Navbar.styles'

export const Navbar = () => {
  return (
    <Nav>
      <TextWrapper>
        <Wrapper>
          <LogoWrapper>
            <p><ToothIcon/> Dental<span>Care</span>.</p>
          </LogoWrapper>
          <BurgerWrapper>
            <BurgerIcon/>
          </BurgerWrapper>
          <DesktopItemWrapper>
            {linkItems.map(item => <LinkItem item={item}/>)}
          </DesktopItemWrapper>
        </Wrapper>
      </TextWrapper>
    </Nav>
  )
}
