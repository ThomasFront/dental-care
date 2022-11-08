import React from 'react'
import { Item } from './LinkItem.styles'

export type ItemProps = {
  item: {
    value: string,
    scrollTo: string
  }
}

export const LinkItemDesktop = ({ item }: ItemProps) => {
  const { value } = item
  return (
    <Item
      to=""
    >
      {value}
    </Item>
  )
}
