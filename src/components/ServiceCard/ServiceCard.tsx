import { Card, ImageContainer, TextContainer } from './ServiceCard.styles'

type ServiceType = {
  service: {
    id: number,
    title: string,
    desc: string,
    image: string
  }
}

export const ServiceCard = ({ service }: ServiceType) => {
  const { id, title, desc, image } = service

  return (
    <Card>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <TextContainer>
        <h2>{title}</h2>
        <p>{desc}</p>
      </TextContainer>
    </Card>
  )
}
