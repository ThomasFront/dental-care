import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormContainer } from '../../components/FormContainer'
import { PageWrapper } from '../../components/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper'
import { ContentWrapper, DecorativePerson, LinkItem, PersonIcon, Wrapper } from './LoginPage.styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth, logInWithEmailAndPassword } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { AnimatedBackground } from '../../components/AnimatedBackground'

type Inputs = {
  email: string,
  password: string,
};

const schema = yup.object().shape({
  email: yup.string().email('Wprowadź prawidłowy schemat email').required('Email jest wymagany'),
  password: yup.string().required('Hasło jest wymagane').min(6, 'Hasło musi posiadać min. 6 znaków').max(20, 'Hasło może zawierać max. 20 znaków')
})

export const LoginPage = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!!user) {
      navigate('/')
    }
  }, [user])

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    logInWithEmailAndPassword(email, password)
    navigate('/visit')
  }

  return (
    <Wrapper>
      <AnimatedBackground />
      <TextWrapper>
        <PageWrapper>
          <FormContainer>
            <DecorativePerson>
              <PersonIcon />
            </DecorativePerson>
            <h1>Zaloguj się</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <button type='submit'>Zaloguj</button>
            </form>
            <ContentWrapper>
              <p>Nie masz konta? <LinkItem to="/register">Zarejestruj</LinkItem> się!</p>
            </ContentWrapper>
          </FormContainer>
        </PageWrapper>
      </TextWrapper>
    </Wrapper>
  )
}
