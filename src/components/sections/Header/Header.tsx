import { ContainWrapper, HeaderWrapper, Shadow, TextWrapper } from './Header.styles'
import DentalPhotoBackground from '/assets/dental-photo.jpg'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderWrapper id='home'>
      <Shadow />
      <img src={DentalPhotoBackground} alt="" loading='lazy' />
      <TextWrapper>
        <ContainWrapper
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1>Lepsze życie zaczyna się od pięknego uśmiechu!</h1>
          <h2>Popraw swój uśmiech z Dental<span>Care</span></h2>
          <button onClick={() => navigate('/visit')}>Umów wizytę!</button>
        </ContainWrapper>
      </TextWrapper>
    </HeaderWrapper>
  )
}

export default Header