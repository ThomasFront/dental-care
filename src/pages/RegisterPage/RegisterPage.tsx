import React, { useEffect } from 'react'
import { FormContainer } from '../../components/FormContainer'
import { PageWrapper } from '../../components/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper'
import { ContentWrapper, DecorativePerson, LinkItem, PersonIcon, Wrapper } from './RegisterPage.styles'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { auth, registerWithEmailAndPassword } from '../../firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom'

type Inputs = {
  email: string,
  password: string,
  confirmPassword: string,
  name: string
};

export const RegisterPage = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!!user) {
      navigate('/')
    }
  }, [user])

  const schema = yup.object().shape({
    email: yup.string().email('Wprowadź prawidłowy schemat email').required('Email jest wymagany'),
    password: yup.string().required('Hasło jest wymagane').min(6, 'Hasło musi się składać z min. 6 znaków').max(20, 'Hasło może zawierać max. 20 znaków'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Hasła muszą być takie same').required('Powtórz hasło'),
    name: yup.string().required('Imie jest wymagane').min(4, 'Imie musi się składać z min. 4 znaków')
  });

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = ({ email, password, name }) => {
    registerWithEmailAndPassword(email, password, name)
    navigate('/')
  }


  return (
    <Wrapper>
      <TextWrapper>
        <PageWrapper>
          <FormContainer>
            <DecorativePerson>
              <PersonIcon />
            </DecorativePerson>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Zarejestruj się</h1>
              <input
                type="email"
                placeholder='Email'
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
              <input
                type="password"
                placeholder='Hasło'
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
              <input
                type="password"
                placeholder='Powtórz hasło'
                {...register("confirmPassword")}
              />
              <p>{errors.confirmPassword?.message}</p>
              <input
                type="name"
                placeholder='Podaj imie'
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
              <button>Zarejestruj</button>
            </form>
            <ContentWrapper>
              <p>Masz już konto? <LinkItem to="/login">Zaloguj</LinkItem> się!</p>
            </ContentWrapper>
          </FormContainer>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
