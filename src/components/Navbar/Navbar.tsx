import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth, logout } from '../../firebase'
import { linkItems } from '../../utils'
import { LinkItemDesktop } from '../LinkItemDesktop'
import { LinkItemMobile } from '../LinkItemMobile'
import { TextWrapper } from '../TextWrapper'
import { VisitButton } from '../VisitButton'
import { BurgerIcon, BurgerWrapper, DesktopItemWrapper, LogoutButton, LogoutIcon, LogoWrapper, Nav as NavDesktop, NavMobile, NavMobileCloseIcon, NavMobileItems, ToothIcon, Wrapper } from './Navbar.styles'

export const Navbar = () => {
  const [openNavMobile, setOpenNavMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const [pageYOffset, setPageYOffset] = useState(0)
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  const handleDirection = (offsetStateValue: number, offsetWindowValue: number) => offsetStateValue < offsetWindowValue

  const handleLogout = () => {
    logout()
    navigate('/')
    setOpenNavMobile(false)
  }

  const handleNav = () => {
    const isGoingDown = handleDirection(pageYOffset, window.scrollY)

    if (showMenu && window.scrollY >= 200 && isGoingDown) {
      setShowMenu(false)
    } else if (!showMenu && !isGoingDown) {
      setShowMenu(true)
    }
    setPageYOffset(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNav)
    return () => window.removeEventListener('scroll', handleNav)
  }, [showMenu, pageYOffset])

  return (
    <>
      <NavDesktop showNav={showMenu}>
        <TextWrapper>
          <Wrapper>
            <LogoWrapper
              to='/'
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
              {user &&
                <LogoutButton onClick={handleLogout}><LogoutIcon /></LogoutButton>
              }
              <VisitButton setOpenNavMobile={setOpenNavMobile} />
            </DesktopItemWrapper>
          </Wrapper>
        </TextWrapper>
      </NavDesktop>
      <NavMobile showMobileMenu={openNavMobile}>
        <NavMobileItems>
          {user &&
            <LogoutButton onClick={handleLogout}><LogoutIcon /></LogoutButton>
          }
          <VisitButton setOpenNavMobile={setOpenNavMobile} />
          {linkItems.map((item, index) => <LinkItemMobile item={item} key={index} setOpenNavMobile={setOpenNavMobile} />)}
        </NavMobileItems>
      </NavMobile>
    </>
  )
}
