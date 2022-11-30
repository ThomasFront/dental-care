import { PageWrapper } from '../../components/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper'
import { ContentWrapper, LinkItem, Wrapper } from './NotFound.styles'
import ErrorImage from '/assets/error.png'

export const NotFound = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          <ContentWrapper>
            <img src={ErrorImage} alt="Ilustracja przedstawiająca błędną scieżke" />
            <p>Ups... Taka ścieżka nie istnieje.</p>
            <LinkItem to="/">Powrót do strony głównej</LinkItem>
          </ContentWrapper>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
