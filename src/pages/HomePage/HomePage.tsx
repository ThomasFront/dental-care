import React from 'react'
import { About } from '../../components/sections/About'
import { Achievements } from '../../components/sections/Achievements'
import { Contact } from '../../components/sections/Contact'
import { Header } from '../../components/sections/Header'
import { Information } from '../../components/sections/Information'
import { Services } from '../../components/sections/Services'
import { Wrapper } from './HomePage.styles'

export const HomePage = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <About />
      <Services />
      <Achievements />
      <Information />
      <Contact />
    </Wrapper>
  )
}
