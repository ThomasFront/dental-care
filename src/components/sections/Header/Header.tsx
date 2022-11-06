import React from 'react'
import { HeaderWrapper, Shadow, TextWrapper } from './Header.styles'
import backgroundVideo from '/assets/backgroundVideo.mp4'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Shadow />
      <video src={backgroundVideo} autoPlay loop muted></video>
      <TextWrapper>
        <h1>Lepsze życie zaczyna się od pięknego uśmiechu!</h1>
        <h2>Popraw swój uśmiech z Dental<span>Care</span></h2>
        <button>Nasze usługi</button>
      </TextWrapper>
    </HeaderWrapper>
  )
}

export default Header