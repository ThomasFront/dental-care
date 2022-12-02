import { useLocation, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { Item } from './LinkItem.styles'

export type ItemProps = {
  item: {
    value: string,
    scrollTo: string
  }
}

export const LinkItemDesktop = ({ item }: ItemProps) => {
  const { value, scrollTo } = item
  const navigate = useNavigate()

  const goToHomeAndScroll = async () => {
    await navigate('/');
    await scroller.scrollTo(scrollTo, {
      duration: 500,
      smooth: true,
      offset: -60,
    });
  };

  return (
    <Item
      onClick={goToHomeAndScroll}
    >
      {value}
    </Item>
  )
}
