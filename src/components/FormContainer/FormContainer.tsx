import React from 'react'
import { ChildrenType } from '../Layout/Layout'
import { Container } from './FormContainer.styles'

export const FormContainer = ({ children }: ChildrenType) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
