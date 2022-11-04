import React from 'react'
import { ItemProps } from '../LinkItemDesktop/LinkItem'
import { LinkItem } from './LinkItemMobile.styles'

export const LinkItemMobile = ({ item }: ItemProps) => {
  return (
    <LinkItem>{item}</LinkItem>
  )
}
