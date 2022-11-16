import { ServiceType } from '../../types/strapi'
import { Card, ImageContainer, TextContainer } from './ServiceCard.styles'

type ServiceCardProps = {
  service: ServiceType
}

export const ServiceCard = ({ service }: ServiceCardProps) => {

  return (
    <Card>
      <ImageContainer>
        <img
          src={`http://localhost:1337${service.Avatar.data.attributes.url}`}
          alt={`Ilustracja przedstawiająca ${service.Title}`} />
      </ImageContainer>
      <TextContainer>
        <h2>{service.Title}</h2>
        <p>{service.Description}</p>
      </TextContainer>
    </Card>
  )
}
