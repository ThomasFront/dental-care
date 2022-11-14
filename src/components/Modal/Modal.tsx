import React from 'react'
import { ChildrenType } from '../Layout/Layout'
import { Container, Wrapper } from './Modal.styles'

export const Modal = ({children}: ChildrenType) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}
