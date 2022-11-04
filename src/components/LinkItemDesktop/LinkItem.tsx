import React from 'react'
import { Item } from './LinkItem.styles'

export type ItemProps = {
  item: string
}

export const LinkItemDesktop = ({item}: ItemProps) => {
  return (
    <Item>{item}</Item>
  )
}
