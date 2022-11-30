import { achievements } from '../../../utils'
import { Achievement } from '../../Achievement'
import { ItemContainer, Title, Wrapper } from './Achievements.styles'

export const Achievements = () => {
  return (
    <Wrapper>
      <Title>Nasze osiągnięcia</Title>
      <ItemContainer>
        {achievements.map(item => <Achievement key={item.id} item={item} />)}
      </ItemContainer>
    </Wrapper>
  )
}
