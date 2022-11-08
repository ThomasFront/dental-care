import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './VisitButton.styles'

type NavMobileType = {
  setOpenNavMobile: (value: boolean) => void
}

export const VisitButton = ({setOpenNavMobile}: NavMobileType) => {
  return (
    <Link to="/visit" onClick={() => setOpenNavMobile(false)}>
      <Wrapper>
        Umów wizytę
      </Wrapper>
    </Link>
  )
}
