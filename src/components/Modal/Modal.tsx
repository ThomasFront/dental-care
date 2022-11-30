import { ChildrenType } from '../Layout/Layout'
import { Container, Wrapper } from './Modal.styles'

export const Modal = ({ children }: ChildrenType) => {
  return (
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Container
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
      >
        {children}
      </Container>
    </Wrapper>
  )
}
