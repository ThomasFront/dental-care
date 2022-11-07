import React from 'react'
import { Item } from './LinkItem.styles'

export type ItemProps = {
  item: {
    value: string,
    scrollTo: string
  }
}

export const LinkItemDesktop = ({ item }: ItemProps) => {
  const { value, scrollTo } = item
  return (
    <Item
      to={scrollTo}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      activeClass='activeSection'
    >
      {value}
    </Item>
  )
}
