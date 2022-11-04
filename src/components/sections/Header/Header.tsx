import React from 'react'
import { HeaderWrapper, Shadow, TextWrapper } from './Header.styles'
import backgroundVideo from '../../../assets/backgroundVideo.mp4'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Shadow />
      <video src={backgroundVideo} autoPlay loop muted></video>
      <TextWrapper>
        <h1>A better life starts with a beautiful smile!</h1>
        <h2>Improve your smile with Dental<span>Care</span></h2>
        <button>Check our services</button>
      </TextWrapper>
    </HeaderWrapper>
  )
}

export default Header