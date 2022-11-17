import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Appointment } from '../../components/Appointment'
import { Category } from '../../components/Category'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { PageWrapper } from '../../components/PageWrapper'
import { Profile } from '../../components/Profile'
import { TextWrapper } from '../../components/TextWrapper'
import { VisitHistory } from '../../components/VisitHistory'
import { auth, db, logout } from '../../firebase'
import { updateUserInfo, UserInfoType, userSelector } from '../../store/slices/userSlice'
import { visitPageCategories } from '../../utils'
import { CategoriesContainer, CategoryInformation, ContentContainer, WelcomeContainer, Wrapper } from './VisitPage.styles'

export const VisitPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [selectedCategory, setSelectedCategory] = useState('Appointment')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userInfo = useSelector(userSelector)

  const getUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docs = await getDocs(q);
      if (docs.docs[0]) {
        dispatch(updateUserInfo(docs.docs[0].data() as UserInfoType))
      }
    } catch {
      console.log('user not logged in')
    }
  }

  useEffect(() => {
    if (!loading && user) {
      getUser()
    }
  }, [user])

  useEffect(() => {
    if (!loading && !user && !error) {
      navigate('/login')
    }
  }, [user, loading])

  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          <ContentContainer>
            {loading ?
              <LoadingSpinner /> :
              <>
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
                  {!loading && selectedCategory === 'Appointment' && <Appointment setSelectedCategory={setSelectedCategory} />}
                  {!loading && selectedCategory === 'History' && <VisitHistory />}
                  {!loading && selectedCategory === 'Account' && <Profile />}
                </CategoryInformation>
              </>
            }
          </ContentContainer>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
