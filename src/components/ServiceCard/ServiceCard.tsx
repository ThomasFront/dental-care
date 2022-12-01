import { ServiceType } from '../../types/strapi'
import { Card, ImageContainer, TextContainer } from './ServiceCard.styles'

type ServiceCardProps = {
  service: ServiceType
}

export const ServiceCard = ({ service }: ServiceCardProps) => {

  return (
    <Card
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <ImageContainer>
        <img
          src={`${import.meta.env.VITE_STRAPI_URL}${service.Avatar.data.attributes.url}`}
          alt={`Ilustracja przedstawiająca ${service.Title}`} />
      </ImageContainer>
      <TextContainer>
        <h2>{service.Title}</h2>
        <p>{service.Description}</p>
      </TextContainer>
    </Card>
  )
}
