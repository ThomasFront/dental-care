import React from 'react'
import { UserInfoType } from '../../pages/VisitPage/VisitPage'
import { InformationBox, TitleBox, Wrapper } from './Profile.styles'
import { getAuth, deleteUser, User } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../firebase'
 
type InfoType = {
  userInfo: UserInfoType | null
}

export const Profile = ({ userInfo }: InfoType) => {
  const { name, surname, email } = userInfo as UserInfoType
  const navigate = useNavigate()

  const deleteAccount = async () => {
    try{
      const auth = getAuth();
      const user = auth.currentUser;
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docs = await getDocs(q);
      await deleteDoc(doc(db, "users", docs.docs[0].id))
      await deleteUser(user as User)
      logout()
      navigate('/')
    } catch (error){
      console.log('error')
    }
  }

  return (
    <Wrapper>
      <TitleBox>
        <p>Informacje o Twoim koncie:</p>
      </TitleBox>
      <InformationBox>
        <p>Imie i nazwisko: <span>{name} {surname}</span></p>
        <p>Email: <span>{email}</span></p>
        <button onClick={deleteAccount}>Usuń konto</button>
      </InformationBox>
    </Wrapper>
  )
}
