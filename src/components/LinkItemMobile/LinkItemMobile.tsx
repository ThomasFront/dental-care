import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
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
  const navigate = useNavigate()

  const goToHomeAndScroll = async () => {
    setOpenNavMobile(false)
    await navigate('/');
    await scroller.scrollTo(scrollTo, {
      duration: 500,
      smooth: true,
      offset: -60,
    });
  };

  return (
    <LinkItem
      onClick={goToHomeAndScroll}
    >
      {value}
    </LinkItem>
  )
}
