import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { Appointment } from '../../components/Appointment'
import { Category } from '../../components/Category'
import { PageWrapper } from '../../components/PageWrapper'
import { Profile } from '../../components/Profile'
import { TextWrapper } from '../../components/TextWrapper'
import { VisitHistory } from '../../components/VisitHistory'
import { auth, db, logout } from '../../firebase'
import { visitPageCategories } from '../../utils'
import { CategoriesContainer, CategoryInformation, ContentContainer, WelcomeContainer, Wrapper } from './VisitPage.styles'

export type UserInfoType = {
  name: string,
  email: string,
  surname: string,
  uid: string
}

export const VisitPage = () => {
  const [user] = useAuthState(auth);
  const [selectedCategory, setSelectedCategory] = useState('Appointment')
  const [userInfo, setUserInfo] = useState<null | UserInfoType>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const getUser = async () => {
    try {
      setLoading(true)
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docs = await getDocs(q);
      setUserInfo(docs.docs[0].data() as UserInfoType)
      setLoading(false)
    } catch {
      console.log('error')
    }
  }

  useEffect(() => {
    getUser()
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          <ContentContainer>
            <WelcomeContainer>
              <p>Witaj <span>{userInfo?.name} {userInfo?.surname}</span>!</p>
            </WelcomeContainer>
            <CategoriesContainer>
              {visitPageCategories.map(category =>
                <Category
                  key={category.id}
                  item={category}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
              )}
            </CategoriesContainer>
            <CategoryInformation>
              {!loading && selectedCategory === 'Appointment' && <Appointment />}
              {!loading && selectedCategory === 'History' && <VisitHistory />}
              {!loading && selectedCategory === 'Account' && <Profile userInfo={userInfo}/>}
            </CategoryInformation>
          </ContentContainer>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
