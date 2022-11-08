import React from 'react'
import { ChildrenType } from '../Layout/Layout'
import { Wrapper } from './PageWrapper.styles'

export const PageWrapper = ({children}: ChildrenType) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
