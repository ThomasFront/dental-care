import React from 'react'
import { ItemProps } from '../LinkItemDesktop/LinkItem'
import { LinkItem } from './LinkItemMobile.styles'

type LinkItemMobileType = {
  item: {
    value: string;
    scrollTo: string;
  },
  setOpenNavMobile: (value: boolean) => void
}

export const LinkItemMobile = ({ item, setOpenNavMobile }: LinkItemMobileType) => {
  const { value, scrollTo } = item
  return (
    <LinkItem
      to={scrollTo}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      activeClass='activeSection'
      onClick={() => setOpenNavMobile(false)}
    >
      {value}
    </LinkItem>
  )
}
