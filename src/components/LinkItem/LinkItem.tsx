import React from 'react'
import { Item } from './LinkItem.styles'

type ItemProps = {
  item: string
}

export const LinkItem = ({item}: ItemProps) => {
  return (
    <Item>{item}</Item>
  )
}
