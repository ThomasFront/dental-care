import { PageWrapper } from '../../components/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper'
import { ContentWrapper, LinkItem, Wrapper } from './NotFound.styles'
import ErrorImage from '/assets/error.png'

export const NotFound = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          <ContentWrapper
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={ErrorImage} alt="Ilustracja przedstawiająca błędną scieżke" />
            <p>Ups... Taka ścieżka nie istnieje.</p>
            <LinkItem to="/">Powrót do strony głównej</LinkItem>
          </ContentWrapper>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
