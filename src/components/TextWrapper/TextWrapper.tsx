import { ChildrenType } from '../Layout/Layout'
import { Wrapper } from './TextWrapper.styles'

export const TextWrapper = ({ children }: ChildrenType) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
