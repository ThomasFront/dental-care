import { ChildrenType } from '../Layout/Layout'
import { Title } from './SectionTitle.styles'

export const SectionTitle = ({ children }: ChildrenType) => {
  return (
    <Title>{children}</Title>
  )
}
