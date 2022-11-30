import { ChildrenType } from '../Layout/Layout'
import { Container } from './FormContainer.styles'

export const FormContainer = ({ children }: ChildrenType) => {
  return (
    <Container
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Container>
  )
}
