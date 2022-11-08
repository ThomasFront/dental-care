import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { PageWrapper } from '../../components/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper'
import { auth, logout } from '../../firebase'
import { Wrapper } from './VisitPage.styles'

export const VisitPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          VisitPage
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
