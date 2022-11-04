import React from 'react'
import { ChildrenType } from '../Layout/Layout'
import { Title, ToothIcon } from './SectionTitle.styles'

export const SectionTitle = ({ children }: ChildrenType) => {
  return (
      <Title>{children} <span><ToothIcon /></span></Title>
  )
}
