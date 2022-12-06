import { useState } from 'react'
import { AvatarContainer, ButtonModal, ButtonsContainer, ContainerTestAccountInfo, ErrorMessage, InformationBox, TitleBox } from './Profile.styles'
import { getAuth, deleteUser, User } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../firebase'
import { Modal } from '../Modal';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import userDefault from '/assets/user.png'
import { useDispatch } from 'react-redux';
import { updateUserAvatar, userSelector } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Profile = () => {
  const [showModal, setShowModal] = useState(false)
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userInfo = useSelector(userSelector)
  const [error, setError] = useState(false)
  const [deleteAccountError, setDeleteAccountError] = useState(false)
  const [user] = useAuthState(auth)

  const handleUpload = async () => {
    if (!file) {
      setError(true)
      return
    }
    const storageRef = ref(storage, `/files/${file.name}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    const auth = getAuth();
    const user = auth.currentUser;
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const docs = await getDocs(q);
    const docId = docs.docs[0].id
    updateDoc(doc(db, "users", docId), {
      photoUrl: url
    })
    dispatch(updateUserAvatar(url))
    setError(false)
  }

  const deleteAccount = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docs = await getDocs(q);
      await deleteDoc(doc(db, "users", docs.docs[0].id))
      await deleteUser(user as User)
      logout()
      navigate('/')
      setDeleteAccountError(false)
    } catch (error) {
      setDeleteAccountError(true)
    }
  }

  return (
    <>
      <TitleBox>
        <p>Informacje o Twoim koncie:</p>
      </TitleBox>
      <InformationBox>
        <AvatarContainer>
          <img src={userInfo?.photoUrl ? userInfo?.photoUrl : userDefault} alt="" />
          <input
            type="file"
            accept="image/*"
            onChange={e => e.target.files && setFile(e.target.files[0])}
            placeholder='Wybierz avatar'
          />
          <button onClick={handleUpload}>Dodaj avatar</button>
          {error && <ErrorMessage>Nie wybrano avataru</ErrorMessage>}
        </AvatarContainer>
        <p>Imie i nazwisko: <span>{userInfo?.name} {userInfo?.surname}</span></p>
        <p>Email: <span>{userInfo?.email}</span></p>
        <button onClick={() => setShowModal(true)}>Usuń konto</button>
      </InformationBox>
      {showModal &&
        <Modal>
          {user?.uid === 'RD24TB9so6UsO1MLFNH739OF1Ch2' ?
            <ContainerTestAccountInfo>
              <h2>Usuwanie konta dla testowego użytkownika jest wyłączone.</h2>
              <ButtonModal confirm onClick={() => setShowModal(false)}>Zamknij informacje</ButtonModal>
            </ContainerTestAccountInfo>
            :
            <>
              <h2>Czy na pewno chcesz usunąć swoje konto?</h2>
              {deleteAccountError && 'Usuwanie konta nie powiodło się.'}
              <ButtonsContainer>
                <ButtonModal confirm onClick={deleteAccount}>Tak</ButtonModal>
                <ButtonModal onClick={() => setShowModal(false)}>Nie</ButtonModal>
              </ButtonsContainer>
            </>
          }
        </Modal>
      }
    </>
  )
}
