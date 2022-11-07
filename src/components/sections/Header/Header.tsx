import React from 'react'
import { HeaderWrapper, Shadow, TextWrapper } from './Header.styles'
import backgroundVideo from '/assets/Backgroundvideo.webm'
import LazyLoad from 'react-lazy-load';

export const Header = () => {
  return (
    <HeaderWrapper id='home'>
      <Shadow />
      <LazyLoad height="100%">
        <video src={backgroundVideo} autoPlay loop muted></video>
      </LazyLoad>
      <TextWrapper>
        <h1>Lepsze życie zaczyna się od pięknego uśmiechu!</h1>
        <h2>Popraw swój uśmiech z Dental<span>Care</span></h2>
        <button>Nasze usługi</button>
      </TextWrapper>
    </HeaderWrapper>
  )
}

export default Header