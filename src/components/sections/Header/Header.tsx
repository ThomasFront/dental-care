import { ContainWrapper, HeaderWrapper, Shadow, TextWrapper } from './Header.styles'
import backgroundVideo from '/assets/Backgroundvideo.webm'
import LazyLoad from 'react-lazy-load';
import DentalPhotoBackground from '/assets/dental-photo.jpg'

export const Header = () => {
  return (
    <HeaderWrapper id='home'>
      <Shadow />
      <img src={DentalPhotoBackground} alt="" />
      <TextWrapper>
        <ContainWrapper
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1>Lepsze życie zaczyna się od pięknego uśmiechu!</h1>
          <h2>Popraw swój uśmiech z Dental<span>Care</span></h2>
          <button>Nasze usługi</button>
        </ContainWrapper>
      </TextWrapper>
    </HeaderWrapper>
  )
}

export default Header