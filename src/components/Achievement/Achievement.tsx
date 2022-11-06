import { ImgWrapper, Wrapper } from './Achievement.styles'
import CountUp from 'react-countup';

type ItemType = {
  item: {
    id: number,
    title: string,
    image: string,
    amount: number
  }
}

export const Achievement = ({ item }: ItemType) => {
  const { title, image, amount } = item
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={image} alt="Poglądowa ikona danego osiągnięcia" />
      </ImgWrapper>
      <h2>
        <CountUp
          end={amount}
          enableScrollSpy={true}
          duration={3}
        />
      </h2>
      <p>{title}</p>
    </Wrapper>
  )
}
