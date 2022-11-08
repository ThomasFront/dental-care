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
  const { value } = item
  return (
    <LinkItem
      to=""
      onClick={() => setOpenNavMobile(false)}
    >
      {value}
    </LinkItem>
  )
}
